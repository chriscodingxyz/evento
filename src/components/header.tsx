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
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map(({ name, path }) => (
            <li
              key={path}
              className={clsx(
                "hover:text-white flex items-center relative transition",
                {
                  "text-white border-b border-accent": activePathname === path,
                  "text-white/50": activePathname !== path,
                }
              )}
            >
              <Link href={path}>{name}</Link>
              {activePathname === path && (
                <div className="bg-accent h-1 w-full absolute bottom-0"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
