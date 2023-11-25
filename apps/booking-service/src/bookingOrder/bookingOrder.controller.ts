import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BookingOrderService } from "./bookingOrder.service";
import { BookingOrderControllerBase } from "./base/bookingOrder.controller.base";

@swagger.ApiTags("bookingOrders")
@common.Controller("bookingOrders")
export class BookingOrderController extends BookingOrderControllerBase {
  constructor(
    protected readonly service: BookingOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
