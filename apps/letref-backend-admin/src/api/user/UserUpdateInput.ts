import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  name?: string;
  password?: string | null;
  role?: InputJsonValue;
};
