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




  // const count = await countKeys("code_*");

  // return NextResponse.json({
  //   code: 200,
  //   message: "success",
  //   data: {
  //     count,
  //   },
  // });
};
