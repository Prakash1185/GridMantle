"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { RiGithubFill } from "@remixicon/react";
import { Tally2 } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { CommandSearch } from "./command-search";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Sidebar navigation data
const sidebarSections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Blocks",
    items: [
      { title: "Masonry Grid", href: "/docs/masonry-grid" },
    ],
  },
  
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between gap-4 border-b py-2.5 w-full px-4 lg:px-36 border-dashed bg-background/80 z-50 sticky top-0 backdrop-blur-lg">
      {/* LEFT GROUP - Menu + Logo */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        {/* Mobile Drawer Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              
              className="lg:hidden hover:bg-primary/10"
            >
              <Tally2 className="scale-x-125 mt-2  rotate-90" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[320px] overflow-y-auto pl-5">
            <SheetHeader className="">
              <SheetTitle className="text-2xl instrumental ">GridMantle</SheetTitle>
            </SheetHeader>

            <div className=" space-y-6">
              {/* Navigation Links */}
              <div className="space-y-1.5 pb-4 border-b">
                <Link
                  href="/docs/introduction"
                  className="block text-sm font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Docs
                </Link>
                <Link
                  href="/blocks"
                  className="block text-sm font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Blocks
                </Link>
              </div>

              {/* Sidebar Sections */}
              {sidebarSections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h4 className="text-sm font-semibold tracking-tight">
                    {section.title}
                  </h4>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md  py-1.5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <Link href={"/"} className="text-xl sm:text-2xl md:text-3xl font-semibold whitespace-nowrap">
          <h1 className="instrumental">GridMantle</h1>
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
        <div className="hidden sm:block">
          <CommandSearch />
        </div>
        
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
            <RiGithubFill className="scale-125 md:scale-150 text-foreground" />
          </a>
        </Button>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;