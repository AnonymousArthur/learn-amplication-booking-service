import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BookingOrderResolverBase } from "./base/bookingOrder.resolver.base";
import { BookingOrder } from "./base/BookingOrder";
import { BookingOrderService } from "./bookingOrder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BookingOrder)
export class BookingOrderResolver extends BookingOrderResolverBase {
  constructor(
    protected readonly service: BookingOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
