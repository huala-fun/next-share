import { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";

export default middleware(async (req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

// 配置 匹配路由
export const config = {
  matcher: [
    "/((?!api|^/$|login|signout|signup|_next/static|_next/image|favicon.ico|$).*)",
  ],
};
