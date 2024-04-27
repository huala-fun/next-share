import { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";

export default middleware((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|sign-in|sign-out|sign-up|_next/static|_next/image|favicon.ico).*)"],
};
