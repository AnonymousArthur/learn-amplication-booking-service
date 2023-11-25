/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingOrderUpdateManyWithoutUsersInput } from "./BookingOrderUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { StoreEntityUpdateManyWithoutUsersInput } from "./StoreEntityUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BookingOrderUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BookingOrderUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BookingOrderUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  bookingTransactions?: BookingOrderUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => BookingOrderUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BookingOrderUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BookingOrderUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  owningBookingOrder?: BookingOrderUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => StoreEntityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => StoreEntityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => StoreEntityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  storeEntities?: StoreEntityUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };
