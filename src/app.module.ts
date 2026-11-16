import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './auth.middleware';
import { JWT_SECRET } from './constants';
import { OrdersModule } from './orders/orders.module';
import { OrdersController } from './orders/orders.controller';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrderItemsController } from './order-items/order-items.controller';

@Module({
  imports: [
    JwtModule.register({ secret: JWT_SECRET, signOptions: { expiresIn: '1h' } }),
    OrdersModule,
    OrderItemsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(OrdersController, OrderItemsController);
  }
}