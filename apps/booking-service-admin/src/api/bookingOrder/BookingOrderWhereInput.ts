import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { StoreEntityWhereUniqueInput } from "../storeEntity/StoreEntityWhereUniqueInput";

export type BookingOrderWhereInput = {
  bookingNo?: StringNullableFilter;
  createdBy?: UserWhereUniqueInput;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  resource?: ResourceWhereUniqueInput;
  storeEntity?: StoreEntityWhereUniqueInput;
};
