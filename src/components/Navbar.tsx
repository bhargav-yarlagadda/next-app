"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { div } from "framer-motion/client";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            item="Home"
            setActive={setActive}
          ></MenuItem>
        </Link>
        <MenuItem active={active} item="Our courses" setActive={setActive}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
            <HoveredLink href="/seo">Advance Composition</HoveredLink>
            <HoveredLink href="/branding">Song Writing</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
          </div>
        </MenuItem>

        <Link href={'/contact'} >
        <MenuItem active={active} setActive={setActive} item="Contact Us" >
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
