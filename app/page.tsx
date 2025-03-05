import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign } from "lucide-react";

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
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45$</div>
          </CardContent>
        </Card>
        <Card className="w-full bg-amber-200/60">
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">total incomes</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45$</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
