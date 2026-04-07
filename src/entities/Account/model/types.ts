import type z from "zod";
import type { AccountSchema, CreateAccountSchema } from "./schemas";

export type CreateAccountDTO = z.infer<typeof CreateAccountSchema>;
export type Account = z.infer<typeof AccountSchema>;
