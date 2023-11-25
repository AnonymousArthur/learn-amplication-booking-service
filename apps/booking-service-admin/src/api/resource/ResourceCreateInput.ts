import { BookingOrderCreateNestedManyWithoutResourcesInput } from "./BookingOrderCreateNestedManyWithoutResourcesInput";
import { StoreResourceCreateNestedManyWithoutResourcesInput } from "./StoreResourceCreateNestedManyWithoutResourcesInput";

export type ResourceCreateInput = {
  bookingTransactions?: BookingOrderCreateNestedManyWithoutResourcesInput;
  manufacturer?: string | null;
  name?: string | null;
  storeResources?: StoreResourceCreateNestedManyWithoutResourcesInput;
  vendor?: string | null;
};
