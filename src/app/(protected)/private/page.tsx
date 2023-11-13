import HomeCard from "@/components/HomeCard";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";

export default async function PrivatePage() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login?prev=private", RedirectType.replace);
  }
  return (
    <div>
      <nav className="h-14 bg-neutral-800 w-full flex items-center px-4">
        <Link className="bg-neutral-200 py-2 px-4 rounded-lg" href="/">
          Home
        </Link>
      </nav>

      <h1>This is private page</h1>

      <HomeCard />
    </div>
  );
}
