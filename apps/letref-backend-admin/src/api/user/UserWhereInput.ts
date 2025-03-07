import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  password?: StringNullableFilter;
};
