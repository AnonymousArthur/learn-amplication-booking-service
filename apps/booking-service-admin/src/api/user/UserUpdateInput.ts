import { BookingOrderUpdateManyWithoutUsersInput } from "./BookingOrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StoreEntityUpdateManyWithoutUsersInput } from "./StoreEntityUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bookingTransactions?: BookingOrderUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  owningBookingOrder?: BookingOrderUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  storeEntities?: StoreEntityUpdateManyWithoutUsersInput;
  username?: string;
};
