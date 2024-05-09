import { auth } from "@auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { user} = await auth() || {};
  return NextResponse.json({
    code: 200,
    message: "success",
    data: {
        user
    },
  });
};
