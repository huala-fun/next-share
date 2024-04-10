"use client"
import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    return (
        <Button variant="outline" size="icon" onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}


export default function Header() {
    return (
        <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex">
            <Link
                className="bg-gradient-to-tfrom-white via-white dark:from-black dark:via-black pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
                href="/"
                rel="noopener noreferrer"
            >
                <Image
                    src="/logo.png"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={36}
                    height={36}
                    priority
                />
            </Link>
            <ModeToggle />
        </div>
    )
}