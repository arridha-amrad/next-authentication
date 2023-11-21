"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const HomeCard = () => {
  const { data } = useSession();
  const logout = async () => {
    await signOut({
      callbackUrl: "/login",
      redirect: true,
    });
  };
  return (
    <div className="border p-4 flex flex-col rounded-lg w-full max-w-sm">
      <h1 className="font-bold">Hello there...</h1>
      <p>I&apos;m {data?.user?.name}</p>
      {JSON.stringify(data)}
      <button
        onClick={logout}
        className="self-end py-2 px-4 rounded-lg bg-neutral-900 text-white"
      >
        Sign Out
      </button>
    </div>
  );
};

export default HomeCard;
