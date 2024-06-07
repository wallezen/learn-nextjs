import {Posts, Users} from "./model";
import connectToDB from "./utils";

// temporary data
// const users = [
//     {id: 1, name: "Jhon"},
//     {id: 2, name: "Lily"},
// ]

// const posts = [
//     {id: 1, title: "Test 01", body: "tttttttttttttt", userId: 1},
//     {id: 2, title: "Test 02", body: "tttttttttttttt", userId: 1},
//     {id: 3, title: "Test 03", body: "tttttttttttttt", userId: 1},
//     {id: 4, title: "Test 04", body: "tttttttttttttt", userId: 2},
//     {id: 5, title: "Test 05", body: "tttttttttttttt", userId: 2},
//     {id: 6, title: "Test 06", body: "tttttttttttttt", userId: 2},
// ]

export const getPosts = async () => {
    try {
        connectToDB();
        const posts = await Posts.find();
        return posts;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all posts.");
    }
};

export const getSinglePost = async (slug) => {
    try {
        connectToDB();
        const post = await Posts.findOne({slug: slug});
        return post;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch single post.");
    }
};

export const getUsers = async () => {
    try {
        connectToDB();
        const users = await Users.find();
        return users;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all users.");
    }
};

export const getUserInfo = async (userId) => {
    try {
        connectToDB();
        const user = await Users.findById({_id: userId});
        return user;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch user info.");
    }
};