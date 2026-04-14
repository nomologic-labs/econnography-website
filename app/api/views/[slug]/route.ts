import { NextResponse } from "next/server";
import { getViewCount, incrementViewCount } from "@/lib/views";

export function GET(_request: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json({ slug: params.slug, views: getViewCount(params.slug) });
}

export function POST(_request: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json({ slug: params.slug, views: incrementViewCount(params.slug) });
}
