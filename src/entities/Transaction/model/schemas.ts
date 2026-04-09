import z from "zod";

export const TransactionSchema = z.object({
  account: z.object({
    id: z.uuid(),
    name: z.string(),
  }),
  amount: z.number().positive(),
  createdAt: z.date(),
});
