import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoreResourceService } from "./storeResource.service";
import { StoreResourceControllerBase } from "./base/storeResource.controller.base";

@swagger.ApiTags("storeResources")
@common.Controller("storeResources")
export class StoreResourceController extends StoreResourceControllerBase {
  constructor(
    protected readonly service: StoreResourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
