import HomeCard from "@/components/HomeCard";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login", RedirectType.replace);
  }
  return (
    <>
      <nav className="h-14 bg-neutral-800 w-full flex items-center px-4">
        <Link className="bg-neutral-200 py-2 px-4 rounded-lg" href="/private">
          go to private page
        </Link>
      </nav>
      <h1>This is home page</h1>
      <HomeCard />
    </>
  );
};

export default HomePage;
