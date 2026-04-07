import z from "zod";

export const UserCreateSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().min(1).max(255),
});

export const UserSchema = z.object({
  name: z.string(),
  email: z.email(),
});
