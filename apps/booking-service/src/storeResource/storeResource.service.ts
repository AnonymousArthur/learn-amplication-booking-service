import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreResourceServiceBase } from "./base/storeResource.service.base";

@Injectable()
export class StoreResourceService extends StoreResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
