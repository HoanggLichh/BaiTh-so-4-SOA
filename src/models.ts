export type OrderStatus = 'pending' | 'completed' | 'cancelled';

export interface Order {
  id: number;
  customer_name: string;
  customer_email: string;
  total_amount: number;
  status: OrderStatus;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}