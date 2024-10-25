import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
    return NextResponse.json(filteredComments);
}
