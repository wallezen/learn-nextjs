import { register } from "@/lib/action";
import styles from "./register.module.css";

const RegisterPage = () => {
    return (
    <div className={styles.container}>
        <form action={register} className={styles.form}>
            <input type="text" placeholder="Name" name="username" />
            <input type="emial" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" />
            <button>Register</button>
        </form>
    </div>
)
}

export default RegisterPage