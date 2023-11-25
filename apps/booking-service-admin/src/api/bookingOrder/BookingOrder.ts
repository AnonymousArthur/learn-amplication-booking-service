import { User } from "../user/User";
import { Resource } from "../resource/Resource";
import { StoreEntity } from "../storeEntity/StoreEntity";

export type BookingOrder = {
  bookingNo: string | null;
  createdAt: Date;
  createdBy?: User | null;
  id: string;
  owner?: User | null;
  resource?: Resource | null;
  storeEntity?: StoreEntity | null;
  updatedAt: Date;
};
