import { auth as middleware } from "@/auth";

export default middleware(async (req) => {
  console.log("asdasdasd");
  
  console.log(`req.auth ${req.auth} req.auth`);
});

// 配置 匹配路由
export const config = {
  matcher: ["/((?!api|sign-in|sign-out|sign-up|_next/static|_next/image|favicon.ico).*)"],
};  