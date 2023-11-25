import { StoreEntityWhereInput } from "./StoreEntityWhereInput";
import { StoreEntityOrderByInput } from "./StoreEntityOrderByInput";

export type StoreEntityFindManyArgs = {
  where?: StoreEntityWhereInput;
  orderBy?: Array<StoreEntityOrderByInput>;
  skip?: number;
  take?: number;
};
