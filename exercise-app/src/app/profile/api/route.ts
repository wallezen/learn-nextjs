import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    console.log(requestHeaders.get("user-agent"));
    console.log(headerList.get("user-agent"));

    return new Response("<h1>Hello, Next.js!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "name=John Doe",
        },
    });
}
