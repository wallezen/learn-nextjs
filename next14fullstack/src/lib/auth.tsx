import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import connectToDB from "./utils";
import { Users } from "./model";

export const {handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile);
            if(account?.provider === 'github') {
                connectToDB();
                try {
                    const user = await Users.findOne({email: profile?.email});
                    if (!user) {
                        const newUser = new Users({
                            username: profile?.name,
                            email: profile?.email,
                            password: profile?.name,
                            img: profile?.avatar_url,
                        });
                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err);
                    return false;
                }
            }

            return true;
        },
    }
})