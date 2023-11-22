import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  callbacks: {
    session({ session, token }) {
      console.log("start CB session =============================");
      console.log({ session });
      console.log({ token });
      console.log("end CB session =============================");
      if (token.sub && token.username) {
        session.user.id = token.sub;
        session.user.username = token.username as string;
      }
      return session;
    },
    jwt({ token, profile, account, user }) {
      console.log("start CB jwt =============================");
      console.log({ token });
      console.log({ profile });
      console.log({ account });
      console.log({ user });
      console.log("end CB jwt =============================");
      if (account?.provider === "google") {
        // @ts-ignore
        token.picture = profile?.picture;
        token.username = token.email?.split("@")[0];
      }
      return token;
    },
    signIn({ account, profile, email }) {
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CID!,
      clientSecret: process.env.GOOGLE_CSE!,
      profile(profile, tokens) {
        const result = { ...profile, ...tokens, id: profile.sub };
        console.log({ result });
        return result;
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
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
