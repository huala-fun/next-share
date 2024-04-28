import { redis, genCodeShareKey } from "@/lib/redis";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  //   const themes = await redis.get("themes");
  const json = await req.json();
  const uuid = uuidv4();
  const keyPrefix = genCodeShareKey(uuid);
  await redis.set(keyPrefix, JSON.stringify(json));
  return NextResponse.json({
    code: 200,
    message: "success",
    data: {
      uuid,
    },
  });
};
