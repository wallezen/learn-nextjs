"use server";

import connectToDB from "./utils";
import {Posts, Users} from "./model";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";

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

export const handleGithubLogin = async () => {
    'use server';
    await signIn('github');
}

export const handleLogout = async () => {
    'use server';
    await signOut();
}

export const register = async (formData) => {
    const {username, email, password, confirmPassword} = Object.fromEntries(formData);

    if (password != confirmPassword) {
        return "Passwords don't match.";
    }

    try {
        connectToDB();

        const user = await Users.findOne({username});

        if (user) {
            return "User already exists.";
        }

        const newUser = new Users({
            username,
            email,
            password
        });

        await newUser.save();
        return true;
    } catch (error) {
        console.log(error);
        return "Failed to register.";
    }
}


export const login = async (formData) => {
    const {username, password} = Object.fromEntries(formData);

    try {
        connectToDB();

        const user = await Users.findOne({username});

        if (!user) {
            return "User doesn't exist.";
        }

        if (password != user.password) {
            return "Incorrect password.";
        }

        return true;
    } catch (error) {
        console.log(error);
        return "Failed to login.";
    }
}