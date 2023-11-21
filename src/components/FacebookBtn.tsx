"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FacebookButton() {
  const router = useRouter();
  const loginFacebook = async () => {
    const result = await signIn("facebook", {
      callbackUrl: "http://localhost:3000",
      redirect: true,
    });
    if (!result?.error) {
      router.replace("/");
    }
  };
  return (
    <button
      onClick={loginFacebook}
      className="bg-blue-700 text-white font-semibold my-2 rounded-lg px-4 py-2 w-full"
    >
      Login with facebook
    </button>
  );
}
