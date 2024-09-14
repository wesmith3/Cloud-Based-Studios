// Navbar.tsx
"use client";
import React from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";

export function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-xl font-Noir mx-auto z-50", className)}
    >
      <Menu>
        <MenuItem href="#home">HOME</MenuItem>
        <MenuItem href="#projects">PROJECTS</MenuItem>
        <MenuItem href="#portfolio">PORTFOLIO</MenuItem>
        <MenuItem href="#services">SERVICES</MenuItem>
        <MenuItem href="#about">ABOUT</MenuItem>
      </Menu>
    </div>
  );
}
