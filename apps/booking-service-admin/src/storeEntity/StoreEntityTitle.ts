import { StoreEntity as TStoreEntity } from "../api/storeEntity/StoreEntity";

export const STOREENTITY_TITLE_FIELD = "name";

export const StoreEntityTitle = (record: TStoreEntity): string => {
  return record.name?.toString() || String(record.id);
};
