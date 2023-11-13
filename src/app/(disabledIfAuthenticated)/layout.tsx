import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <>{children}</>;
}