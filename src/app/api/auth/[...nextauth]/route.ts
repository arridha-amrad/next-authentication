import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CID!,
      clientSecret: process.env.GOOGLE_CSE!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CID!,
      clientSecret: process.env.GITHUB_CSE!,
    }),
    FacebookProvider({
      clientId: process.env.FB_CID!,
      clientSecret: process.env.FB_CSE!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        identity: { label: "Identity", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log({ credentials });
        const user = {
          id: "1",
          name: credentials?.identity,
          email: "jsmith@example.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
