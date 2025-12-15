
import LoginForm from '@/components/forms/login.forms';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "E-commerce | Login",
  description: "User Login ",
};

const LoginPage = () => {
  return (
    <main className=' h-full w-full flex justify-center items-center'>
      <div className='border border-blue-500 p-5 min-w-100 min-h-100 rounded-lg shadow'>
        <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Login</h1>
        <LoginForm />
      </div>
    </main>
  )
}

export default LoginPage
