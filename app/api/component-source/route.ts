import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const componentPath = searchParams.get("path");
    const stripInternal = searchParams.get("stripInternal") === "true";

    if (!componentPath) {
      return NextResponse.json(
        { error: "Component path is required" },
        { status: 400 }
      );
    }

    const allowedPaths = ["components/ui", "lib/blocks/content"];

    const isAllowed = allowedPaths.some((allowed) =>
      componentPath.startsWith(allowed)
    );

    if (!isAllowed) {
      return NextResponse.json(
        { error: "Access denied to this path" },
        { status: 403 }
      );
    }

    const filePath = path.join(process.cwd(), componentPath);
    let fileContent = await fs.readFile(filePath, "utf-8");

    if (stripInternal || componentPath.includes("preview.tsx")) {
      fileContent = fileContent
        .replace(
          /\/\/ Hook to dynamically fetch preview code[\s\S]*?export function usePreviewCode\(\)[\s\S]*?}\s*$/g,
          ""
        )
        .replace(/import.*useComponentSource.*\n/g, "")
        .trim();
    }

    return NextResponse.json({
      code: fileContent,
      path: componentPath,
    });
  } catch (error) {
    console.error("Error reading component:", error);
    return NextResponse.json(
      { error: "Failed to read component file" },
      { status: 500 }
    );
  }
}