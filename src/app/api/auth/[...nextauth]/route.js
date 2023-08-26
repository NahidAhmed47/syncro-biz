import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "../../../../../helpers";
import { connectDB } from "../../../../../database/mongodb";
import User from "../../../../../models/user";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
            },
            async authorize(credentials) {
                const {email, pin} = credentials;
                try {
                    await connectDB();
                    const user = await User.findOne({email});
                    if(!user){
                        return null;
                    }
                    if(user.pin !== pin){
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    }
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };