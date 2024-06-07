import { Posts } from "@/lib/model";
import connectToDB from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        connectToDB();

        const posts = await Posts.find();
        return NextResponse.json(posts);
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all posts.");
    }
}