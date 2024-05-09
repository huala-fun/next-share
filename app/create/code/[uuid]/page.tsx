import { CodeBlock } from "@components/code-view";
import prisma from "@lib/prisma";

/**
 * 根据 uuid 获取代码分享
 */
export default async function Page({
  params: { uuid },
}: {
  params: { uuid: string };
}) {
  const code = await prisma.codeShare.findUnique({
    where: {
      id: uuid,
    },
  });

  if (!code) return <>没有此分享</>;

  return (
    <CodeBlock
      className=" p-0"
      style={{ backgroundColor: "transparent" }}
      code={code?.code}
      language={code?.language}
    />
  );
}
