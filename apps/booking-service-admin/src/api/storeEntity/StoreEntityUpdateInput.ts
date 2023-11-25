import { BookingOrderUpdateManyWithoutStoreEntitiesInput } from "./BookingOrderUpdateManyWithoutStoreEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StoreResourceUpdateManyWithoutStoreEntitiesInput } from "./StoreResourceUpdateManyWithoutStoreEntitiesInput";

export type StoreEntityUpdateInput = {
  bookingTransactions?: BookingOrderUpdateManyWithoutStoreEntitiesInput;
  location?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput;
  status?: "opening" | "closed" | "renovating" | null;
  storeResources?: StoreResourceUpdateManyWithoutStoreEntitiesInput;
  storeType?: string;
};
