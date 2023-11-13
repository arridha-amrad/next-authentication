"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import GithubButton from "./GithubBtn";
import GoogleButton from "./GoogleBtn";
import FacebookButton from "./FacebookBtn";

const LoginForm = () => {
  const [state, setState] = useState({
    identity: "",
    password: "",
  });
  const params = useSearchParams();
  const [error, setError] = useState("");
  const router = useRouter();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", { ...state, redirect: false });
    if (result) {
      if (!result.error) {
        router.replace(`/${params.get("prev")}`);
      } else {
        setError(result.error);
      }
    }
  };
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-center font-bold my-4 text-xl">Login</h1>
      <p className="text-red-500 text-center">{error}</p>
      <form
        onSubmit={handleSubmit}
        className="border space-y-3 w-full rounded-lg p-4"
      >
        <div className="w-full">
          <label className="block" htmlFor="identity">
            Username or email
          </label>
          <input
            onChange={onChange}
            name="identity"
            value={state.identity}
            className="border w-full rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="identity">
            Password
          </label>
          <input
            onChange={onChange}
            name="password"
            value={state.password}
            className="border w-full rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-neutral-900 text-sm font-bold focus:ring-1 focus:ring-offset-white focus:ring-offset-2 focus:ring-neutral-500 rounded-lg text-white"
        >
          Login
        </button>
      </form>
      <FacebookButton />
      <GithubButton />
      <GoogleButton />
    </div>
  );
};

export default LoginForm;
