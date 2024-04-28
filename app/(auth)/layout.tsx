import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

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
    <div className="p-4 pt-8 w-full lg:w-[960px] lg:mx-auto flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
