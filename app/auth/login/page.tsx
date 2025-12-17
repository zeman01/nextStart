import LoginForm from "@/components/forms/login.form";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce | Login",
  description: "User Login ",
};
const LoginPage = () => {
  return (
    <main className=" bg-blue-100/50 h-full w-full flex justify-center items-center">
      <div className="bg-[#f8f8f8] border border-blue-500 p-5 min-w-100 min-h-100 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Login
        </h1>
        <LoginForm />
        <p className="text-center text-[16px] ">
          Don&apos;t have an account{" "}
          <Link href={"/auth/register"}>
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
