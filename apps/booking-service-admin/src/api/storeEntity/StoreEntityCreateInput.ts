import { BookingOrderCreateNestedManyWithoutStoreEntitiesInput } from "./BookingOrderCreateNestedManyWithoutStoreEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StoreResourceCreateNestedManyWithoutStoreEntitiesInput } from "./StoreResourceCreateNestedManyWithoutStoreEntitiesInput";

export type StoreEntityCreateInput = {
  bookingTransactions?: BookingOrderCreateNestedManyWithoutStoreEntitiesInput;
  location?: string | null;
  name?: string | null;
  owner: UserWhereUniqueInput;
  status?: "opening" | "closed" | "renovating" | null;
  storeResources?: StoreResourceCreateNestedManyWithoutStoreEntitiesInput;
  storeType: string;
};
