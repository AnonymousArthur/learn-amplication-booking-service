/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BookingOrderWhereUniqueInput } from "../../bookingOrder/base/BookingOrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BookingOrderUpdateManyWithoutStoreEntitiesInput {
  @Field(() => [BookingOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookingOrderWhereUniqueInput],
  })
  connect?: Array<BookingOrderWhereUniqueInput>;

  @Field(() => [BookingOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookingOrderWhereUniqueInput],
  })
  disconnect?: Array<BookingOrderWhereUniqueInput>;

  @Field(() => [BookingOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookingOrderWhereUniqueInput],
  })
  set?: Array<BookingOrderWhereUniqueInput>;
}

export { BookingOrderUpdateManyWithoutStoreEntitiesInput as BookingOrderUpdateManyWithoutStoreEntitiesInput };
