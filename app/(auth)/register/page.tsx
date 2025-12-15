import React from "react";
import RegisterForm from "@/components/forms/register.forms";

const Register = () => {
  return <main className="h-full w-full flex justify-center items-center">
    <div className='border border-blue-500 p-5 min-w-100 min-h-100 rounded-lg shadow'>
      <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Register
      </h1>
      <RegisterForm />
    </div>
  </main>
};

export default Register;
