"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchData, SearchItem } from "@/lib/search-data";
import { Search, FileText, Home, Grid } from "lucide-react";

export function CommandSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const getIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "Getting Started":
        return <FileText className="mr-2 h-4 w-4" />;
      case "Components":
        return <Grid className="mr-2 h-4 w-4" />;
      case "Pages":
        return <Home className="mr-2 h-4 w-4" />;
    }
  };

  // Group items by category
  const groupedData = searchData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  return (
    <>
      {/* Desktop Search Bar - Full Width */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center justify-between rounded-md border-2 px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-accent-foreground transition-colors w-full space-x-3"
      >
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Search documentation...</span>
          <span className="md:hidden">Search...</span>
        </div>
        <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedData).map(([category, items]) => (
            <CommandGroup key={category} heading={category} className="">
              {items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => {
                    runCommand(() => router.push(item.href));
                  }}
                  className=""
                >
                  {getIcon(item.category as SearchItem["category"])}
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}