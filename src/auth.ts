import NextAuth from "next-auth"
import Credentials from "@auth/core/providers/credentials";

export const {handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials.username == 'admin' && credentials.password === 'admin') {
                    return {
                        id: 'admin',
                        name: 'admin',
                    }
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        authorized: async ({request, auth}) => {
            const { pathname } = request.nextUrl
            if (pathname === '/') return true
            // Logged-in users are authenticated, otherwise redirect to login page
            return !!auth;
        },
    },
})