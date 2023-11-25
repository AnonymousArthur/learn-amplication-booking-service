import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StoreResourceResolverBase } from "./base/storeResource.resolver.base";
import { StoreResource } from "./base/StoreResource";
import { StoreResourceService } from "./storeResource.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StoreResource)
export class StoreResourceResolver extends StoreResourceResolverBase {
  constructor(
    protected readonly service: StoreResourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
