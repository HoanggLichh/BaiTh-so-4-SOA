import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { OrderItem } from '../models';
import { PRODUCT_SERVICE_URL } from '../constants';

@Injectable()
export class OrderItemsService {
  private items: OrderItem[] = [];
  private nextId = 1;

  constructor(private readonly httpService: HttpService) {}

  findAll(): OrderItem[] {
    return this.items;
  }

  findByOrder(orderId: number): OrderItem[] {
    return this.items.filter((i) => i.order_id === orderId);
  }

  findOne(id: number): OrderItem {
    const item = this.items.find((i) => i.id === id);
    if (!item) {
      throw new NotFoundException(`Không tìm thấy mặt hàng id ${id}`);
    }
    return item;
  }

  // Gọi sang product-service (bài 3) lấy sản phẩm và kiểm tra tồn kho
  async getProductAndCheckStock(productId: number, quantity: number, token: string): Promise<any> {
    if (!Number.isInteger(productId) || productId <= 0) {
      throw new BadRequestException('product_id không hợp lệ');
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new BadRequestException('quantity phải là số nguyên dương');
    }

    let product: any;
    try {
      const res = await firstValueFrom(
        this.httpService.get(`${PRODUCT_SERVICE_URL}/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      );
      product = res.data;
    } catch (err: any) {
      const status = err?.response?.status;
      if (status === 404) {
        throw new NotFoundException(`Sản phẩm id ${productId} không tồn tại`);
      }
      throw new ServiceUnavailableException(
        'Không gọi được product-service (cổng 3001). Hãy kiểm tra service bài 3 đã chạy chưa.',
      );
    }

    if (product.quantity < quantity) {
      throw new BadRequestException(
        `Không đủ tồn kho cho sản phẩm "${product.name}". Còn lại: ${product.quantity}, yêu cầu: ${quantity}`,
      );
    }
    return product;
  }

  addItem(orderId: number, product: any, quantity: number): OrderItem {
    const newItem: OrderItem = {
      id: this.nextId++,
      order_id: orderId,
      product_id: product.id,
      product_name: product.name,
      quantity,
      unit_price: product.price,
      total_price: product.price * quantity,
    };
    this.items.push(newItem);
    return newItem;
  }

  async create(
    data: { order_id: number; product_id: number; quantity: number },
    token: string,
  ): Promise<OrderItem> {
    if (!Number.isInteger(data?.order_id) || data.order_id <= 0) {
      throw new BadRequestException('order_id không hợp lệ');
    }
    const product = await this.getProductAndCheckStock(data.product_id, data.quantity, token);
    return this.addItem(data.order_id, product, data.quantity);
  }

  update(id: number, data: { quantity?: number; unit_price?: number }): OrderItem {
    const item = this.findOne(id);
    if (data?.quantity !== undefined) {
      if (!Number.isInteger(data.quantity) || data.quantity <= 0) {
        throw new BadRequestException('quantity phải là số nguyên dương');
      }
      item.quantity = data.quantity;
    }
    if (data?.unit_price !== undefined) {
      if (typeof data.unit_price !== 'number' || data.unit_price < 0) {
        throw new BadRequestException('unit_price không hợp lệ');
      }
      item.unit_price = data.unit_price;
    }
    item.total_price = item.unit_price * item.quantity;
    return item;
  }

  remove(id: number): { message: string } {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) {
      throw new NotFoundException(`Không tìm thấy mặt hàng id ${id}`);
    }
    this.items.splice(index, 1);
    return { message: `Đã xóa mặt hàng id ${id}` };
  }

  removeByOrder(orderId: number): void {
    this.items = this.items.filter((i) => i.order_id !== orderId);
  }
}