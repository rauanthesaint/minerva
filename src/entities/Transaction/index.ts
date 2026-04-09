import type { Transaction } from "./model";

export * from "./model";

export const transactionsMock: Transaction[] = [
  {
    account: {
      id: "2",
      name: "Kaspi",
    },
    amount: 100.32,
    createdAt: new Date("09-04-2026 18:52"),
  },
];
