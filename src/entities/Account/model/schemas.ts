import z from "zod";

export const CreateAccountSchema = z.object({
    name: z.string().min(1).max(255),
    balance: z.coerce.number(),
});

export const AccountSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    balance: z.coerce.number(),
    createdAt: z.date(),
});
