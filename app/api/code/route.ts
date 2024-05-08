import { redis, genCodeShareKey } from "@/lib/redis";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  //   const themes = await redis.get("themes");
  const session = await auth();
  const json = await req.json();
  const uuid = uuidv4();
  const keyPrefix = genCodeShareKey(uuid);
  await redis.set(keyPrefix, JSON.stringify(json));




  //  prisma.codeShare
  //   .create({
  //     data: {
  //       uuid,
  //       code: json.code,
  //       theme: json.theme,
  //       session: {
  //         connect: {
  //           id: session.user.id,
  //         },
  //       },
  //     },
  //   })




  return NextResponse.json({
    code: 200,
    message: "success",
    data: {
      uuid,
    },
  });
};
