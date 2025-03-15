import { z } from "zod";

export const transactionSchema = z.object({
  id: z.string().cuid().optional(),
  amount: z.number().min(1, "Amount must be greater than 0"),
  type: z.enum(["Expense", "Income"]),
  description: z.string().min(1, "Description is required"),
  date: z.coerce.date(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;
