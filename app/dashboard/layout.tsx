"use client";

import { ReactNode, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  console.log(dark);

  return (
    <div>
      <div className={`${dark ? "bg-gray-300" : "bg-white"}`}>{children}</div>
    </div>
  );
}
