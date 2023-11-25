import { BookingOrder } from "../bookingOrder/BookingOrder";
import { User } from "../user/User";
import { StoreResource } from "../storeResource/StoreResource";

export type StoreEntity = {
  bookingTransactions?: Array<BookingOrder>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  owner?: User;
  status?: "opening" | "closed" | "renovating" | null;
  storeResources?: Array<StoreResource>;
  storeType: string;
  updatedAt: Date;
};
