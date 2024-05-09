import { auth } from "@auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const session = await auth();

  return NextResponse.json(
    Array(99)
      .fill(0)
      .map((_, i) => {
        return {
          creator: {
            ...session?.user,
          },
          prompt: "Hello, how are you?",
          tag: "test",
          id: i,
        };
      })
  );
};
