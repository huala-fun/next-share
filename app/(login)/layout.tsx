import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <div className="overflow-hidden min-h-screen  bg-background shadow">
      {children}
    </div>
  );
}
