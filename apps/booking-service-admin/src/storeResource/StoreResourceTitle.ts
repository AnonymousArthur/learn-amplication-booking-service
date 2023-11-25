import { StoreResource as TStoreResource } from "../api/storeResource/StoreResource";

export const STORERESOURCE_TITLE_FIELD = "stock";

export const StoreResourceTitle = (record: TStoreResource): string => {
  return record.stock?.toString() || String(record.id);
};
