import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function contentTypeForFile(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    case ".svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  _request: Request,
  { params }: { params: { path: string[] } }
) {
  const segments = params.path;
  if (!segments?.length) {
    return new NextResponse("Not found", { status: 404 });
  }

  const resolved = path.resolve(CONTENT_ROOT, ...segments);
  if (!resolved.startsWith(CONTENT_ROOT)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
    return new NextResponse("Not found", { status: 404 });
  }

  const body = fs.readFileSync(resolved);
  return new NextResponse(body, {
    headers: {
      "Content-Type": contentTypeForFile(resolved),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
