"use client";

import { useState, useEffect } from "react";

export function useComponentSource(componentPath: string) {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCode() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/component-source?path=${encodeURIComponent(componentPath)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch component source");
        }

        const data = await response.json();
        setCode(data.code);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    if (componentPath) {
      fetchCode();
    }
  }, [componentPath]);

  return { code, loading, error };
}