import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
export const GET = async (req: NextRequest) => {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({
      code: 403,
      message: "unauthorized",
      data: {},
    });
  }
  const codes = await prisma.codeShare.findMany({
    where: {
      userId: session.user.id!,
    },
    include: {
      user: true,
    },
  });

  return NextResponse.json({
    code: 200,
    message: "success",
    data: codes.map((item) => {
      const createdAt = format(
        new Date(item.createdAt),
        "yyyy-MM-dd HH:mm:ss.SSSxxx"
      );
      return { ...item, author: item.user.name, createdAt };
    }),
  });
};
