import { BookingOrderListRelationFilter } from "../bookingOrder/BookingOrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreEntityListRelationFilter } from "../storeEntity/StoreEntityListRelationFilter";

export type UserWhereInput = {
  bookingTransactions?: BookingOrderListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  owningBookingOrder?: BookingOrderListRelationFilter;
  storeEntities?: StoreEntityListRelationFilter;
  username?: StringFilter;
};
