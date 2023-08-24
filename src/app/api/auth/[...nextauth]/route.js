import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "../../../../../helpers";


const authOptions = {
    providers: [
        CredentialsProvider({
            name: "creds",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter email" },
                password: { label: "Password", type: "password", placeholder: "Enter password" }
            },
            async authorize(credentials, req){
                if(!credentials.email || !credentials.password || !credentials.email ){
                    return null;
                }
                const user = users.find(user => user.email === credentials.email);
                if(user?.password === credentials.password){
                    return user;
                }
                return null;

            }
        })
    ]
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};