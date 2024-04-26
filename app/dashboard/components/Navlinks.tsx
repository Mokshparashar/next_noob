"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navlinks() {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`${pathname === "/" ? "text-blue-500" : "text-black"}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${
          pathname === "/dashboard" ? "text-blue-500" : "text-black"
        }`}
        href="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  );
}

export default Navlinks;
