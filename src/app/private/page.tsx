import HomeCard from "@/components/HomeCard";
import Link from "next/link";

export default async function PrivatePage() {
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
