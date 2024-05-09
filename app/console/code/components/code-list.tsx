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

const handleDeleteCode = () => {
  console.log("handleDeleteCode");

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
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "language",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="language" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("language")}</div>
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
            onClick={() => handleDeleteCode()}>
            删除
          </Button>
        </>
      );
    },
  },
];

export default function CodeList() {
  const [codeList, setCodeList] = useState<CodeShare[]>([]);
  const initCodeList = async () => {
    const { data = [] } = await get("/api/code/list");
    setCodeList((value: any[]) => {
      return data;
    });
    console.log(data);
  };

  useEffect(() => {
    initCodeList();
  }, []);

  return <DataTable data={codeList} columns={columns} />;
}
