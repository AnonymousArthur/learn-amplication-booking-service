import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { StoreEntityWhereUniqueInput } from "../storeEntity/StoreEntityWhereUniqueInput";

export type StoreResourceCreateInput = {
  resource: ResourceWhereUniqueInput;
  stock: string;
  storeEntity: StoreEntityWhereUniqueInput;
};
