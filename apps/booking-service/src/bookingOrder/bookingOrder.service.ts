import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookingOrderServiceBase } from "./base/bookingOrder.service.base";

@Injectable()
export class BookingOrderService extends BookingOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
