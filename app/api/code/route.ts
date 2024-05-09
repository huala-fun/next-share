import { NextRequest, NextResponse } from "next/server";
import { auth } from "@auth";
import { prisma } from "@lib/prisma";

export const POST = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json({
      code: 403,
      message: "unauthorized",
      data: {},
    });
  }
  const json = await req.json();
  if (session?.user) {
    const codeShare = await prisma.codeShare.create({
      data: {
        code: json.code,
        language: json.language,
        user: {
          connect: {
            email: session.user.email!,
          },
        },
      },
    });
    return NextResponse.json({
      code: 200,
      message: "success",
      data: {
        uuid: codeShare.id,
      },
    });
  }
  return NextResponse.json({
    code: 400,
    message: "success",
    data: {},
  });
};
