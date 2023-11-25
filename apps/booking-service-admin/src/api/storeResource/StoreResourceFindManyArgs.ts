import { StoreResourceWhereInput } from "./StoreResourceWhereInput";
import { StoreResourceOrderByInput } from "./StoreResourceOrderByInput";

export type StoreResourceFindManyArgs = {
  where?: StoreResourceWhereInput;
  orderBy?: Array<StoreResourceOrderByInput>;
  skip?: number;
  take?: number;
};
