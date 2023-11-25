/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateStoreEntityArgs } from "./CreateStoreEntityArgs";
import { UpdateStoreEntityArgs } from "./UpdateStoreEntityArgs";
import { DeleteStoreEntityArgs } from "./DeleteStoreEntityArgs";
import { StoreEntityCountArgs } from "./StoreEntityCountArgs";
import { StoreEntityFindManyArgs } from "./StoreEntityFindManyArgs";
import { StoreEntityFindUniqueArgs } from "./StoreEntityFindUniqueArgs";
import { StoreEntity } from "./StoreEntity";
import { BookingOrderFindManyArgs } from "../../bookingOrder/base/BookingOrderFindManyArgs";
import { BookingOrder } from "../../bookingOrder/base/BookingOrder";
import { StoreResourceFindManyArgs } from "../../storeResource/base/StoreResourceFindManyArgs";
import { StoreResource } from "../../storeResource/base/StoreResource";
import { User } from "../../user/base/User";
import { StoreEntityService } from "../storeEntity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StoreEntity)
export class StoreEntityResolverBase {
  constructor(
    protected readonly service: StoreEntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "StoreEntity",
    action: "read",
    possession: "any",
  })
  async _storeEntitiesMeta(
    @graphql.Args() args: StoreEntityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [StoreEntity])
  @nestAccessControl.UseRoles({
    resource: "StoreEntity",
    action: "read",
    possession: "any",
  })
  async storeEntities(
    @graphql.Args() args: StoreEntityFindManyArgs
  ): Promise<StoreEntity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => StoreEntity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "StoreEntity",
    action: "read",
    possession: "own",
  })
  async storeEntity(
    @graphql.Args() args: StoreEntityFindUniqueArgs
  ): Promise<StoreEntity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StoreEntity)
  @nestAccessControl.UseRoles({
    resource: "StoreEntity",
    action: "create",
    possession: "any",
  })
  async createStoreEntity(
    @graphql.Args() args: CreateStoreEntityArgs
  ): Promise<StoreEntity> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        owner: {
          connect: args.data.owner,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StoreEntity)
  @nestAccessControl.UseRoles({
    resource: "StoreEntity",
    action: "update",
    possession: "any",
  })
  async updateStoreEntity(
    @graphql.Args() args: UpdateStoreEntityArgs
  ): Promise<StoreEntity | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          owner: {
            connect: args.data.owner,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => StoreEntity)
  @nestAccessControl.UseRoles({
    resource: "StoreEntity",
    action: "delete",
    possession: "any",
  })
  async deleteStoreEntity(
    @graphql.Args() args: DeleteStoreEntityArgs
  ): Promise<StoreEntity | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [BookingOrder], { name: "bookingTransactions" })
  @nestAccessControl.UseRoles({
    resource: "BookingOrder",
    action: "read",
    possession: "any",
  })
  async resolveFieldBookingTransactions(
    @graphql.Parent() parent: StoreEntity,
    @graphql.Args() args: BookingOrderFindManyArgs
  ): Promise<BookingOrder[]> {
    const results = await this.service.findBookingTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [StoreResource], { name: "storeResources" })
  @nestAccessControl.UseRoles({
    resource: "StoreResource",
    action: "read",
    possession: "any",
  })
  async resolveFieldStoreResources(
    @graphql.Parent() parent: StoreEntity,
    @graphql.Args() args: StoreResourceFindManyArgs
  ): Promise<StoreResource[]> {
    const results = await this.service.findStoreResources(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "owner",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldOwner(
    @graphql.Parent() parent: StoreEntity
  ): Promise<User | null> {
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
