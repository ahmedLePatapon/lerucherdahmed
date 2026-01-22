"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (typeof pathname === "string" && pathname.startsWith("/admin")) {
    return null;
  }

  return <>{children}</>;
}
