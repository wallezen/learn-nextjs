import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";


const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && <div className={styles.imageContainer}>
                    <Image 
                    src={post.img} 
                    alt="" 
                    fill 
                    className={styles.img} />
                </div>}
                <span className={styles.date}>2024.05.01</span>
            </div>
            <div className={styles.bottom}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.desc}>{post.desc}</p>
                <Link href={`/blog/${post.slug}`} className={styles.link} >READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard