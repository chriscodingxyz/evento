"use client";

import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9  ">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map(({ name, path }) => (
            <li
              key={path}
              className={clsx("hover:text-white transition", {
                "text-white border-b border-accent": activePathname === path,
                "text-white/50": activePathname !== path,
              })}
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
