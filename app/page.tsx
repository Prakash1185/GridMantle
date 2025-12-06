import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <main className="py-32 sm:py-40 md:py-60 w-full flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center">
        GridMantle
      </h1>
      <p className="text-base sm:text-lg md:text-xl tracking-wide text-center max-w-2xl pt-3 text-muted-foreground">
        A modern and ready to use library for grid layouts for your next project.
      </p>

      <div className="flex items-center gap-4 pt-8">
        <Button asChild size="lg">
          <Link href="/docs/introduction" className="flex items-center gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/blocks">Browse Blocks</Link>
        </Button>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl italic font-light pt-12 text-muted-foreground">
        Coming Soon...
      </h2>
    </main>
  );
};

export default Home;