import TransactionForm from "@/components/transaction-form";
import { getTransactionById } from "@/lib/actions";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const transaction = await getTransactionById(id);
  console.log(transaction);
  return transaction?.id ? (
    <TransactionForm />
  ) : (
    <div>no transaction found</div>
  );
}
