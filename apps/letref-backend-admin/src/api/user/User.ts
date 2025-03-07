import { JsonValue } from "type-fest";

export type User = {
  email: string | null;
  id: bigint;
  name: string;
  password: string | null;
  role: JsonValue;
};
