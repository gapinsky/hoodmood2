import { NextRequest, NextResponse } from "next/server";
import { getInstagramPostsPage } from "@/myComponents/news/instagram/instagramApi";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const after = request.nextUrl.searchParams.get("after")?.trim();

  if (!after || after.length > 500) {
    return NextResponse.json(
      { status: "error", posts: [], nextCursor: null },
      { status: 400 },
    );
  }

  const page = await getInstagramPostsPage(after);
  return NextResponse.json(page, {
    status: page.status === "error" ? 503 : 200,
    headers: { "Cache-Control": "private, no-store" },
  });
}
