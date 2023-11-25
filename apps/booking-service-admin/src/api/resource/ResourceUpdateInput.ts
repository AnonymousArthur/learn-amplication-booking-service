import { BookingOrderUpdateManyWithoutResourcesInput } from "./BookingOrderUpdateManyWithoutResourcesInput";
import { StoreResourceUpdateManyWithoutResourcesInput } from "./StoreResourceUpdateManyWithoutResourcesInput";

export type ResourceUpdateInput = {
  bookingTransactions?: BookingOrderUpdateManyWithoutResourcesInput;
  manufacturer?: string | null;
  name?: string | null;
  storeResources?: StoreResourceUpdateManyWithoutResourcesInput;
  vendor?: string | null;
};
