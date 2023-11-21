import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function ProtectedLayout({ children }: Props) {
  return <>{children}</>;
}
