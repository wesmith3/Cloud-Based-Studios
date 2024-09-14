"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-xl font-Noir mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="HOME" />
        <MenuItem setActive={setActive} active={active} item="PROJECTS" />
        <MenuItem setActive={setActive} active={active} item="PORTFOLIO" />
        <MenuItem setActive={setActive} active={active} item="SERVICES" />
        <MenuItem setActive={setActive} active={active} item="ABOUT" />
      </Menu>
    </div>
  );
}
