import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { countKeys, redis } from "@/lib/redis";
export const GET = async (req: NextRequest) => {
  const session = await auth();


  if (!session) {
    return NextResponse.json({
      code: 403,
      message: "unauthorized",
      data: {},
    });
  }

  const res = await redis.get("code_021f9417-4851-4f30-aaef-6196f9764b5e");

  return NextResponse.json({
    code: 200,
    message: "success",
    data: {
      res,
    },
  });
};
