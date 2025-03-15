import { z } from "zod";

export const transactionSchema = z.object({
  id: z.string().cuid().optional(), // Auto-generated
  amount: z.number().min(0, "Amount must be greater than or equal to 0"),
  type: z.enum(["Expense", "Income"]),
  description: z.string().min(1, "Description is required"),
  date: z.coerce.date(), // Ensures correct Date conversion
  createdAt: z.date().optional(), // Auto-generated
  updatedAt: z.date().optional(), // Auto-generated
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;
