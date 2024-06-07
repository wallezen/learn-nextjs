import Image from "next/image";
import styles from "./singlepost.module.css";
import { getSinglePost, getUserInfo } from "@/lib/data";

const getPost = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("get post data failed!")
    }

    return res.json()
}

// const getUserInfo = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//     if (!res.ok) {
//         throw new Error("get post data failed!")
//     }

//     return res.json()
// }

const SinglePost = async ({params}) => {
    const {slug} = params;

    // get single post with API
    const post = await getPost(slug);

    // get single post without API
    // const post = await getSinglePost(slug);

    const userInfo = await getUserInfo(post.userId)
    
    return (
        <div className={styles.container}>
            <div className={styles.postImage}>
                <Image 
                src={post.img ? post.img : "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
                alt="" fill />
            </div>
            <div className={styles.postContent}>
                <div className={styles.title}>
                    <h1>{post.title}</h1>
                </div>
                <div className={styles.metadata}>
                    <div className={styles.author}>
                        <div className={styles.authorAvatar}>
                            <Image src="/noavatar.png" alt="" fill />
                        </div>
                        {userInfo && <div className={styles.authorName}>
                            <h2>Author</h2>
                            <p>{userInfo.username}</p>
                        </div>}
                    </div>
                    <div className={styles.pubDate}>
                        <h2>Published</h2>
                        <p>2024-05-01</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <p>{post.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost