import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-5 py-10 flex flex-col md:flex-row justify-between">
      {/* column 1 */}
      <div className="space-y-2">
        <Link
          href={"/"}
          className="text-xl sm:text-2xl md:text-3xl font-semibold whitespace-nowrap"
        >
          <h1 className="instrumental">GridMantle</h1>
        </Link>
        <h1 className="text-sm pt-0.5 text-muted-foreground">
          &copy; {new Date().getFullYear()} GridMantle. All Rights Reserved.
        </h1>
        <h1 className="pt-4">
          Built by{" "}
          <span className="underline text-primary cursor-pointer">
            <Link href={"/"}>@Prakash</Link>
          </span>
        </h1>
        {/* Version 2 of the footer text */}
        {/* <h1 className="pt-4">
          Built by{" "}
          <span className="underline text-primary cursor-pointer">
            <Link href={"/"}>@Prakash</Link>
          </span>
          . Source code available on{" "}
          <Link href={"/"} className="underline">
            GitHub
          </Link>
        </h1> */}
      </div>

      <div className="grid grid-cols-2 pt-10 md:pt-0 md:gap-20">
        {/* column 2 */}
        <div>
          <h1 className="font-medium">Links</h1>
          <div className="flex flex-col text-muted-foreground space-y-0.5 pt-1">
            <Link href={"/docs"} className="hover:text-primary">
              Docs
            </Link>
            <Link href={"/Blocks"} className="hover:text-primary">
              Blocks
            </Link>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="font-medium">Socials</h1>
          <div className="flex flex-col text-muted-foreground space-y-0.5 pt-1">
            <Link href={"/docs"} className="hover:text-primary">
              GitHub
            </Link>
            <Link href={"/Blocks"} className="hover:text-primary">
              Linkdein
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
