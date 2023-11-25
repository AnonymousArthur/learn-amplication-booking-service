import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { StoreEntityWhereUniqueInput } from "../storeEntity/StoreEntityWhereUniqueInput";

export type StoreResourceUpdateInput = {
  resource?: ResourceWhereUniqueInput;
  stock?: string;
  storeEntity?: StoreEntityWhereUniqueInput;
};
