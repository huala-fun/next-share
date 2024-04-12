import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ModeToggle } from "./dark-mode";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center   bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl  lg:p-4 lg:dark:bg-zinc-800/30">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
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
        </a>
      </p>
      <ModeToggle />
    </div>
  );
}
