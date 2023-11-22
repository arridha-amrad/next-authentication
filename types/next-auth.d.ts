import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      id: string;
    } & DefaultSession["user"];
  }
}
