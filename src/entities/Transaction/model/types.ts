import type z from "zod";
import type { TransactionSchema } from "./schemas";

export type Transaction = z.infer<typeof TransactionSchema>;
