import { handleGithubLogin, login } from "@/lib/action";
import { auth, signIn, signOut } from "@/lib/auth";

const LoginPage = async () => {
    const session = await auth();

    console.log(session);

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <form action={login}>
                <input type="text" placeholder="Name" name="username" />
                <input type="password" placeholder="Password" name="password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage