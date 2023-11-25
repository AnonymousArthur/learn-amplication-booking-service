import { StringFilter } from "../../util/StringFilter";
import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { StoreEntityWhereUniqueInput } from "../storeEntity/StoreEntityWhereUniqueInput";

export type StoreResourceWhereInput = {
  id?: StringFilter;
  resource?: ResourceWhereUniqueInput;
  stock?: StringFilter;
  storeEntity?: StoreEntityWhereUniqueInput;
};
