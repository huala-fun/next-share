import { Metadata } from "next";
import { MainNav } from "@app/console/components/main-nav";
import { Search } from "@app/console/components/search";
import { UserNav } from "@components/header/user-nav";
import { auth } from "@auth";

export const metadata: Metadata = {
  title: "Console",
  description: "Console",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b sticky top-0 ">
        <div className="flex h-16 items-center px-4">
          <div className="font-bold cursor-pointer">NextShare</div>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            {session && (
              <UserNav
                image={session.user?.image}
                name={session.user?.name}
                email={session.user?.email}
              />
            )}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
