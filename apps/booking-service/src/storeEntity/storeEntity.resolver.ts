import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StoreEntityResolverBase } from "./base/storeEntity.resolver.base";
import { StoreEntity } from "./base/StoreEntity";
import { StoreEntityService } from "./storeEntity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StoreEntity)
export class StoreEntityResolver extends StoreEntityResolverBase {
  constructor(
    protected readonly service: StoreEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
