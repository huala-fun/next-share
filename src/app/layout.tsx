import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
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
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange>
          <main className="flex min-h-screen flex-col items-center px-4 pt-4 sm:p-24 sm:pt-4">
            <Header />
            <div className="lg:max-w-5xl lg:w-full lg:mb-0 ">
              {children}
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
