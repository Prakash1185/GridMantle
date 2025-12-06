"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { RiGithubFill, RiMenuLine, RiCloseLine } from "@remixicon/react";
import { ModeToggle } from "./mode-toggle";
import { CommandSearch } from "./command-search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      ref={menuRef}
      className="flex items-center justify-between gap-4 border py-2 w-[calc(100%-2rem)] lg:w-[calc(100%-16rem)] mx-auto px-4 md:px-6 rounded-xl my-2.5 bg-background/80 z-50 sticky top-2.5 backdrop-blur-lg"
    >
      {/* LEFT GROUP - Logo + Links */}
      <div className="flex items-center gap-6 flex-shrink-0">
        <Link href={"/"} className="text-xl md:text-2xl font-semibold whitespace-nowrap">
          <h1>GridMantle</h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-4 text-muted-foreground font-medium">
          <Link
            href={"/docs/introduction"}
            className="hover:text-primary transition-all duration-200 whitespace-nowrap"
          >
            Docs
          </Link>
          <Link
            href={"/blocks"}
            className="hover:text-primary transition-all duration-200 whitespace-nowrap"
          >
            Blocks
          </Link>
        </div>
      </div>

      

      {/* RIGHT GROUP - Actions */}
      <div className="flex items-center justify-center gap-2 flex-shrink-0">
          <CommandSearch />
        <Button
          size={"icon-lg"}
          className="bg-transparent border-2 hover:bg-primary/20 hover:text-primary cursor-pointer"
          asChild
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill className="scale-125 md:scale-150" />
          </a>
        </Button>

        <div className="hidden lg:block">
          <ModeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          size={"icon-lg"}
          className="lg:hidden bg-transparent border-2 hover:bg-primary/20 hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RiCloseLine className="scale-125" />
          ) : (
            <RiMenuLine className="scale-125" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-background border rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              href={"/docs/introduction"}
              className="text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-accent transition-colors"
              onClick={closeMenu}
            >
              Docs
            </Link>
            <Link
              href={"/blocks"}
              className="text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-accent transition-colors"
              onClick={closeMenu}
            >
              Blocks
            </Link>
            <div className="pt-2 px-3">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;