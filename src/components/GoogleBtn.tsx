"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function GoogleButton() {
  const params = useSearchParams();
  const loginGithub = async () => {
    await signIn("google", {
      callbackUrl: `/${params.get("prev") ?? ""}`,
      redirect: true,
    });
  };
  return (
    <button
      onClick={loginGithub}
      className="bg-amber-600 text-white font-semibold mb-2 rounded-lg px-4 py-2 w-full"
    >
      Login with google
    </button>
  );
}
