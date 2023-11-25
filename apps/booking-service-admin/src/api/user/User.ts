import { BookingOrder } from "../bookingOrder/BookingOrder";
import { JsonValue } from "type-fest";
import { StoreEntity } from "../storeEntity/StoreEntity";

export type User = {
  bookingTransactions?: Array<BookingOrder>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  owningBookingOrder?: Array<BookingOrder>;
  roles: JsonValue;
  storeEntities?: Array<StoreEntity>;
  updatedAt: Date;
  username: string;
};
