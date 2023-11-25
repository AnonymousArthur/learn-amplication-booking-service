import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreEntityServiceBase } from "./base/storeEntity.service.base";

@Injectable()
export class StoreEntityService extends StoreEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
