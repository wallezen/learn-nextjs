import { Posts } from "@/lib/model";
import connectToDB from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const {slug} = params;

    try {
        connectToDB();

        const post = await Posts.findOne({slug: slug});
        return NextResponse.json(post);
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch single post.");
    }
}