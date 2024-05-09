import Link from "next/link";

import { cn } from "@lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}>
      <Link
        href="/console"
        className="text-sm font-medium transition-colors hover:text-primary">
        Overview
      </Link>
      <Link
        href="/console/code"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Code Share
      </Link>
      <Link
        href="/console"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        MD Share
      </Link>
      <Link
        href="/console"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Settings
      </Link>
    </nav>
  );
}
