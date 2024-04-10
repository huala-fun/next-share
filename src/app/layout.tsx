import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Come and share",
  description: "Share to everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center px-4 pt-4 sm:p-24 sm:pt-12">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-tfrom-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <Link
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="/"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo.png"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={48}
                  height={48}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="lg:max-w-5xl lg:w-full lg:mb-0 ">
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
