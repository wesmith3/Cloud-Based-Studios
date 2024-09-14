// navbar-menu.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuItemProps {
  href: string;
  children?: React.ReactNode;
}

export const MenuItem = ({
  href,
  children,
}: MenuItemProps) => {
  return (
    <div className="relative">
      <Link href={href} scroll={false}>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-white/[.75] hover:text-dustyBrown"
        >
          {children}
        </motion.p>
      </Link>
    </div>
  );
};

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="relative rounded-full border-transparent bg-black shadow-input flex justify-center space-x-9 py-3 "
    >
      {children}
    </nav>
  );
};
