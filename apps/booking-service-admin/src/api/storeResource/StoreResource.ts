import { Resource } from "../resource/Resource";
import { StoreEntity } from "../storeEntity/StoreEntity";

export type StoreResource = {
  createdAt: Date;
  id: string;
  resource?: Resource;
  stock: string;
  storeEntity?: StoreEntity;
  updatedAt: Date;
};
