import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json([
    {
      creator: {
        image: "https://avatars.githubusercontent.com/u/105260564?v=4",
      },
      id: 1,
    },
  ]);
};
