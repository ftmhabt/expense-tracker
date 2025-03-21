import TransactionForm from "@/components/transaction-form";
import { getTransactionById } from "@/lib/actions";

export default async function page({ params }: { params: { id: string } }) {
  const transactionId = params.id;
  const transaction = await getTransactionById(transactionId);

  return transaction?.id == "" ? (
    <div>no transaction found</div>
  ) : (
    <TransactionForm />
  );
}
