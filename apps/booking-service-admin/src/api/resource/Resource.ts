import { BookingOrder } from "../bookingOrder/BookingOrder";
import { StoreResource } from "../storeResource/StoreResource";

export type Resource = {
  bookingTransactions?: Array<BookingOrder>;
  createdAt: Date;
  id: string;
  manufacturer: string | null;
  name: string | null;
  storeResources?: Array<StoreResource>;
  updatedAt: Date;
  vendor: string | null;
};
