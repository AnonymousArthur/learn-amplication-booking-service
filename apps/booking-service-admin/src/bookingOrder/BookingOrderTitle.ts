import { BookingOrder as TBookingOrder } from "../api/bookingOrder/BookingOrder";

export const BOOKINGORDER_TITLE_FIELD = "bookingNo";

export const BookingOrderTitle = (record: TBookingOrder): string => {
  return record.bookingNo?.toString() || String(record.id);
};
