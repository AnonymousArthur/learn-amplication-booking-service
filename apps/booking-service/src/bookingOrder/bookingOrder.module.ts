import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BookingOrderModuleBase } from "./base/bookingOrder.module.base";
import { BookingOrderService } from "./bookingOrder.service";
import { BookingOrderController } from "./bookingOrder.controller";
import { BookingOrderResolver } from "./bookingOrder.resolver";

@Module({
  imports: [BookingOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [BookingOrderController],
  providers: [BookingOrderService, BookingOrderResolver],
  exports: [BookingOrderService],
})
export class BookingOrderModule {}
