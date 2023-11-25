import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { StoreEntityWhereUniqueInput } from "../storeEntity/StoreEntityWhereUniqueInput";

export type BookingOrderCreateInput = {
  bookingNo?: string | null;
  createdBy?: UserWhereUniqueInput | null;
  owner?: UserWhereUniqueInput | null;
  resource?: ResourceWhereUniqueInput | null;
  storeEntity?: StoreEntityWhereUniqueInput | null;
};
