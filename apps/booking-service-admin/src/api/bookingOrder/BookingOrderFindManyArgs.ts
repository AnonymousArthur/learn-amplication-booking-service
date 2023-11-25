import { BookingOrderWhereInput } from "./BookingOrderWhereInput";
import { BookingOrderOrderByInput } from "./BookingOrderOrderByInput";

export type BookingOrderFindManyArgs = {
  where?: BookingOrderWhereInput;
  orderBy?: Array<BookingOrderOrderByInput>;
  skip?: number;
  take?: number;
};
