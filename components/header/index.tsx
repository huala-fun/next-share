import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { auth } from "@/auth";
import { UserNav } from "./user-nav";

export default async function Header({ className }: { className?: string }) {
  const session = await auth();
  return (
    <header
      className={cn(
        "z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-4",
        className
      )}>
      <Link
        className="pointer-events-none flex place-items-center gap-2 backdrop-blur-2xl   lg:pointer-events-auto lg:p-0"
        href="/"
        rel="noopener noreferrer">
        <Image
          src="/logo.png"
          alt="Toolbox Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
        <span className=" text-xl">share</span>
      </Link>
      <div className=" flex gap-2">
        {session ? (
          <UserNav
            image={session.user?.image}
            name={session.user?.name}
            email={session.user?.email}
          />
        ) : (
          <>
            {" "}
            <Link href={"/login"}>
              <Button variant={"outline"}>Log in</Button>
            </Link>
            <Link href={"/signup"}>
              <Button>Sign up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
