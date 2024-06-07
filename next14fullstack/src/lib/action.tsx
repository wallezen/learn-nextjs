"use server";

import connectToDB from "./utils";
import {Posts} from "./model";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData);

    console.log(title, desc, slug, userId);

    try {
        connectToDB();

        const newPost = new Posts({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();
    } catch(err) {
        console.log(err);
        throw new Error("Failed to add post.");
    }
}


export const deletePost = async (formData) => {
    const {id} = Object.fromEntries(formData);

    console.log(id);

    try {
        connectToDB();

        await Posts.findByIdAndDelete(id);
        revalidatePath('/blog');
    } catch(err) {
        console.log(err);
        throw new Error("Failed to delete post.");
    }
}