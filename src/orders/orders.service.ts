import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Order, OrderStatus } from '../models';
import { OrderItemsService } from '../order-items/order-items.service';

const VALID_STATUS: OrderStatus[] = ['pending', 'completed', 'cancelled'];

@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private nextId = 1;

  constructor(private readonly orderItemsService: OrderItemsService) {}

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order {
    const order = this.orders.find((o) => o.id === id);
    if (!order) {
      throw new NotFoundException(`Không tìm thấy đơn hàng id ${id}`);
    }
    return order;
  }

  detail(id: number) {
    const order = this.findOne(id);
    return { ...order, items: this.orderItemsService.findByOrder(id) };
  }

  // Tạo đơn hàng mới + kiểm tra tồn kho qua product-service
  async create(body: any, token: string) {
    if (!body?.customer_name || !body?.customer_email) {
      throw new BadRequestException('Thiếu customer_name hoặc customer_email');
    }
    const items: any[] = Array.isArray(body.items) ? body.items : [];

    // Kiểm tra toàn bộ tồn kho trước, đủ hàng mới tạo đơn
    const checked: { product: any; quantity: number }[] = [];
    let total = 0;
    for (const it of items) {
      const quantity = Number(it.quantity);
      const product = await this.orderItemsService.getProductAndCheckStock(
        Number(it.product_id),
        quantity,
        token,
      );
      checked.push({ product, quantity });
      total += product.price * quantity;
    }
    if (items.length === 0) {
      total = Number(body.total_amount) || 0;
    }

    const now = new Date();
    const order: Order = {
      id: this.nextId++,
      customer_name: body.customer_name,
      customer_email: body.customer_email,
      total_amount: total,
      status: 'pending',
      created_at: now,
      updated_at: now,
    };
    this.orders.push(order);

    const createdItems = checked.map((c) =>
      this.orderItemsService.addItem(order.id, c.product, c.quantity),
    );
    return { ...order, items: createdItems };
  }

  updateStatus(id: number, status: string): Order {
    if (!VALID_STATUS.includes(status as OrderStatus)) {
      throw new BadRequestException('status phải là: pending, completed hoặc cancelled');
    }
    const order = this.findOne(id);
    order.status = status as OrderStatus;
    order.updated_at = new Date();
    return order;
  }

  remove(id: number): { message: string } {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index === -1) {
      throw new NotFoundException(`Không tìm thấy đơn hàng id ${id}`);
    }
    this.orders.splice(index, 1);
    this.orderItemsService.removeByOrder(id);
    return { message: `Đã xóa đơn hàng id ${id}` };
  }
}