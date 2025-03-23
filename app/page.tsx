import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CreditCard, DollarSign, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { getTransaction } from "../lib/data";
import moment from "moment";
import { buttonVariants } from "@/components/ui/button";
import TransactionDeleteButton from "@/components/transaction-delete-button";

export default async function Home() {
  const transactions = await getTransaction();

  const totalIncomes =
    transactions
      ?.filter((t) => t.type == "Income")
      .reduce((acc, t) => acc + t.amount, 0) || 0;
  const totalExpenses =
    transactions
      ?.filter((t) => t.type == "Expense")
      .reduce((acc, t) => acc + t.amount, 0) || 0;

  const FormatNumber = (num: number) => num.toLocaleString("en-US");
  return (
    <>
      {/*top section*/}
      <div className="flex flex-col md:flex-row *:border-0 gap-5">
        <Card className="w-full bg-amber-200/60">
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              total expenses
            </CardTitle>
            <DollarSign className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {FormatNumber(totalExpenses)}$
            </div>
          </CardContent>
        </Card>
        <Card className="w-full bg-amber-200/60">
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">total incomes</CardTitle>
            <CreditCard className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {FormatNumber(totalIncomes)}$
            </div>
          </CardContent>
        </Card>
      </div>
      {/*table*/}
      <Card className="w-full bg-amber-200/60 border-0">
        <CardHeader className="flex-row justify-between">
          <div>
            <CardTitle>Transcations</CardTitle>
            <CardDescription>Recent transcations</CardDescription>
          </div>
          <Link
            href="/new"
            className={buttonVariants({
              className: "capitalize text-amber-100",
            })}
          >
            add new transaction
          </Link>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b-rose-500 *:text-rose-500 hover:bg-rose-500/10">
                <TableHead>Transaction</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions?.map((item) => (
                <TableRow key={item.id} className="hover:bg-rose-500/10">
                  <TableCell>
                    <div>{item.description}</div>
                    <div>
                      {moment(item.date.toString()).startOf("minute").fromNow()}
                    </div>
                  </TableCell>
                  <TableCell>{FormatNumber(item.amount)}</TableCell>
                  <TableCell className="flex gap-2 mt-3">
                    <Link href={"/edit/" + item.id}>
                      <Pencil className="mr-2 h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out" />
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Trash2 className="mr-2 h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out text-rose-500" />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your record.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <TransactionDeleteButton record={item}>
                            <AlertDialogAction>Delete</AlertDialogAction>
                          </TransactionDeleteButton>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
