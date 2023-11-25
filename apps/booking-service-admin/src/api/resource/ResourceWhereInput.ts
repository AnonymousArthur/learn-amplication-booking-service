import { BookingOrderListRelationFilter } from "../bookingOrder/BookingOrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreResourceListRelationFilter } from "../storeResource/StoreResourceListRelationFilter";

export type ResourceWhereInput = {
  bookingTransactions?: BookingOrderListRelationFilter;
  id?: StringFilter;
  manufacturer?: StringNullableFilter;
  name?: StringNullableFilter;
  storeResources?: StoreResourceListRelationFilter;
  vendor?: StringNullableFilter;
};
