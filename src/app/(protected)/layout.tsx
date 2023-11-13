import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function ProtectedLayout({ children }: Props) {
  // const session = await getServerSession();
  // if (!session) {
  //   redirect("/login", RedirectType.replace);
  // }
  return <>{children}</>;
}
