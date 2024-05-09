"use client";

import { get } from "@/lib/fetch";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { type CodeShare } from "@prisma/client";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Loading } from "@/components/loading";
import { useLoading } from "@/hooks/useLoading";
import Link from "next/link";

const handleDeleteCode = (row: any) => {
  console.log("handleDeleteCode");

  console.log(row);

  toast.error("功能暂未实现");
};

const columns: ColumnDef<CodeShare>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader className=" w-[5px]" column={column} title="Id" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        <Link href={ `/code/${row.getValue("id")}` } target="_blank">{row.getValue("id")}</Link>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "language",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="language" />
    ),
    cell: ({ row }) => (
      <div className="w-[50px]">{row.getValue("language")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="createdAt" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("createdAt")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="author" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("author")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="操作" />
    ),
    cell: ({ row }) => {
      return (
        <>
          <Button
            variant={"destructive"}
            size={"sm"}
            onClick={() => handleDeleteCode(row)}>
            删除
          </Button>
        </>
      );
    },
  },
];

export default function CodeList() {
  const { loading, data, run } = useLoading(() => get("/api/code/list"));
  useEffect(() => {
    run();
  }, []);
  return (
    <Loading loading={loading}>
      <DataTable data={data} columns={columns} />{" "}
    </Loading>
  );
}
