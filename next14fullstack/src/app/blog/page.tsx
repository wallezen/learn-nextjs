import PostCard from "@/components/postCard/page";
import styles from "./blog.module.css";
import { error } from "console";
import { getPosts } from "@/lib/data";

const getPostData = async () => {
    const res = await fetch("http://localhost:3000/api/blog")

    if (!res.ok) {
        throw new Error("get post data failed!")
    }

    return res.json()
}

const BlogPage = async () => {
    // get post data with API
    const posts = await getPostData()

    // get post data without API
    // const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map(post=>(
                <div className={styles.blogPost} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}

export default BlogPage