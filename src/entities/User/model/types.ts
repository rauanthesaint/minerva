import type z from "zod";
import type { UserCreateSchema, UserSchema } from "./schemas";

export type UserCreateDTO = z.infer<typeof UserCreateSchema>;
export type User = z.infer<typeof UserSchema>;
