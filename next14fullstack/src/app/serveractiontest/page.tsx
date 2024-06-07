import { addPost, deletePost } from "@/lib/action";
import styles from "./serveractiontest.module.css";

const ServerActionTest = () => {
    return (
            <div className={styles.container}>
                <form action={addPost}>
                    <input type="text" placeholder="Title" name="title" />
                    <input type="text" placeholder="Desc" name="desc" />
                    <input type="text" placeholder="Slug" name="slug" />
                    <input type="text" placeholder="UserId" name="userId" />
                    <button>Submit</button>
                </form>


                <form action={deletePost}>
                    <input type="text" placeholder="Post Id" name="id" />
                    <button>Delete</button>
                </form>
            </div>
    )
}

export default ServerActionTest;