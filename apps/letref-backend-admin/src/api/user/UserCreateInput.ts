import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  name: string;
  password?: string | null;
  role?: InputJsonValue;
};
