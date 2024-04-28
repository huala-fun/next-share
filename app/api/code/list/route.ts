import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
export const GET = async (req: NextRequest) => {
  const session = await auth();
  const user = await prisma.user.findFirst();
  return NextResponse.json({
    code: 200,
    message: "success",
    data: {
      user,
      session,
    },
  });
};
