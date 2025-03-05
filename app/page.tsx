import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreditCard, DollarSign, Pencil } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
            <div className="text-2xl font-bold">45$</div>
          </CardContent>
        </Card>
        <Card className="w-full bg-amber-200/60">
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">total incomes</CardTitle>
            <CreditCard className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45$</div>
          </CardContent>
        </Card>
      </div>
      {/*table*/}
      <Card className="w-full bg-amber-200/60 border-0">
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
              <TableRow className="hover:bg-rose-500/10">
                <TableCell>g</TableCell>
                <TableCell>g</TableCell>
                <TableCell>
                  <Link href={"/edit"}>
                    <Pencil className="mr-2 h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out" />
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
