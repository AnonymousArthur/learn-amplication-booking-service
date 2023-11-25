import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  manufacturer?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  vendor?: SortOrder;
};
