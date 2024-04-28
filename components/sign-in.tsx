"use client"
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export function SignIn() {
  return (
    <Button
      type="submit"
      onClick={async () => {
        await signIn("github",{
          callbackUrl: "/",
        });
      }}>
      Signin with GitHub
    </Button>
  );
}
