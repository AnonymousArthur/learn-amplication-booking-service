import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StoreEntityModuleBase } from "./base/storeEntity.module.base";
import { StoreEntityService } from "./storeEntity.service";
import { StoreEntityController } from "./storeEntity.controller";
import { StoreEntityResolver } from "./storeEntity.resolver";

@Module({
  imports: [StoreEntityModuleBase, forwardRef(() => AuthModule)],
  controllers: [StoreEntityController],
  providers: [StoreEntityService, StoreEntityResolver],
  exports: [StoreEntityService],
})
export class StoreEntityModule {}
