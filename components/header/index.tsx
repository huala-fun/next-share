import Image from "next/image";
import * as React from "react";
import { ModeToggle } from "./dark-mode";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header({ className }: { className?: string }) {
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
      <ModeToggle />
    </header>
  );
}
