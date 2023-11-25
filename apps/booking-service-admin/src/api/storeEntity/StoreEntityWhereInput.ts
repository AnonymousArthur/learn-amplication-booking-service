import { BookingOrderListRelationFilter } from "../bookingOrder/BookingOrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StoreResourceListRelationFilter } from "../storeResource/StoreResourceListRelationFilter";

export type StoreEntityWhereInput = {
  bookingTransactions?: BookingOrderListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  status?: "opening" | "closed" | "renovating";
  storeResources?: StoreResourceListRelationFilter;
  storeType?: StringFilter;
};
