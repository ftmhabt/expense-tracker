import TransactionForm from "@/components/transaction-form";
import { getTransactionById } from "@/lib/actions";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const transaction = await getTransactionById(id);

  return transaction && transaction?.id ? (
    <TransactionForm
      transaction={{
        id: transaction.id || "",
        amount: transaction.amount || 0,
        type: transaction.type || "Expense",
        description: transaction.description || "",
        date: transaction.date || new Date(),
        createdAt: transaction.createdAt || new Date(),
        updatedAt: transaction.updatedAt || new Date(),
      }}
    />
  ) : (
    <div>no transaction found</div>
  );
}
