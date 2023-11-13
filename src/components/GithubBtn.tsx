"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function GithubButton() {
  const params = useSearchParams();
  const loginGithub = async () => {
    await signIn("github", {
      callbackUrl: `/${params.get("prev") ?? ""}`,
      redirect: true,
    });
  };
  return (
    <button
      onClick={loginGithub}
      className="bg-neutral-800 text-white font-semibold my-4 rounded-lg px-4 py-2 w-full"
    >
      Login with github
    </button>
  );
}
