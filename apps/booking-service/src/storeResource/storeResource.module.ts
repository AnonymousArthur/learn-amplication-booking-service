import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StoreResourceModuleBase } from "./base/storeResource.module.base";
import { StoreResourceService } from "./storeResource.service";
import { StoreResourceController } from "./storeResource.controller";
import { StoreResourceResolver } from "./storeResource.resolver";

@Module({
  imports: [StoreResourceModuleBase, forwardRef(() => AuthModule)],
  controllers: [StoreResourceController],
  providers: [StoreResourceService, StoreResourceResolver],
  exports: [StoreResourceService],
})
export class StoreResourceModule {}
