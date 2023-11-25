import { BookingOrderCreateNestedManyWithoutUsersInput } from "./BookingOrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StoreEntityCreateNestedManyWithoutUsersInput } from "./StoreEntityCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bookingTransactions?: BookingOrderCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  owningBookingOrder?: BookingOrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  storeEntities?: StoreEntityCreateNestedManyWithoutUsersInput;
  username: string;
};
