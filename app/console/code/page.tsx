import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";
import { taskSchema } from "./data/schema";
import CodeList from "./components/code-list";
import { Loading } from "@components/loading";

export const metadata: Metadata = {
  title: "Code",
  description: "Code",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/console/code/data/tasks.json")
  );
  const tasks = JSON.parse(data.toString());
  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <CodeList />
      {/* <DataTable data={tasks} columns={columns} /> */}
    </div>
  );
}
