import { CodeBlock } from "@/components/code-view";
import { genCodeShareKey, redis } from "@/lib/redis";
import Auth from "./auth";

export default async function Page({
  params: { uuid },
}: {
  params: { uuid: string };
}) {
  const key = genCodeShareKey(uuid);
  const res: { code: string; language: string; auth: null } = (await redis.get(
    key
  )) as any;


  return (
    <CodeBlock
      className=" p-0"
      style={{ backgroundColor: "transparent" }}
      code={res.code}
      language={res.language}
    />
  );
}
