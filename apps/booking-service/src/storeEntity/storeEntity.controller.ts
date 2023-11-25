import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoreEntityService } from "./storeEntity.service";
import { StoreEntityControllerBase } from "./base/storeEntity.controller.base";

@swagger.ApiTags("storeEntities")
@common.Controller("storeEntities")
export class StoreEntityController extends StoreEntityControllerBase {
  constructor(
    protected readonly service: StoreEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
