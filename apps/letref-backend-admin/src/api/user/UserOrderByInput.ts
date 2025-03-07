import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
};
