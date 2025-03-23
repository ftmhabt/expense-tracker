"use client";
import { deleteTransactionById } from "@/lib/actions";
import { Transaction } from "@prisma/client";
import React, { ReactNode } from "react";
import toast from "react-hot-toast";

export default function TransactionDeleteButton({
  children,
  record,
}: {
  children: ReactNode;
  record: Transaction;
}) {
  async function handleClick() {
    await deleteTransactionById(record?.id)
      .then(() => toast.success("record deleted"))
      .catch((e) => {
        console.log({ e });
        return toast.error("went wrong");
      });
  }
  return <div onClick={handleClick}>{children}</div>;
}
