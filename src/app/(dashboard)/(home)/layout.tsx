import AppHeader from "@/components/custom/app-header";
import type { ReactNode } from "react";

export default function OtherLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
