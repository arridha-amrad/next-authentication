import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <LoginForm />

      <Link className="underline my-3" href="/public">
        Go to public page
      </Link>
    </main>
  );
};

export default LoginPage;
