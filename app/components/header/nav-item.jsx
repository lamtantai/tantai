"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavItem({ item, onClick }) {
  const path = usePathname();
  return (
    <div className="w-full overflow-hidden">
      <Link
        onClick={onClick}
        href={item.href}
        className={`relative block duration-200 hover:-translate-y-full ${path === item.href && "pointer-events-none -translate-y-full"}`}
      >
        <h3 className="font-semibold leading-none">{item.name}</h3>
        <h3 className="absolute w-full bg-primary font-semibold leading-none text-secondary">
          {item.name}
        </h3>
      </Link>
    </div>
  );
}
