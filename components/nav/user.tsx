/*eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useAuth } from "@/hooks/auth.hook";
import { IUserResponse } from "@/types/auth.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

// const UserSection = () => {
//   const { data, isLoading } = useQuery({
//     queryFn: checkAuth,
//     queryKey: ["check-auth-status"],
//     retry: false,
//     staleTime: 2 * 60 * 1000, // 2 mins
//   });
//   return (
//     <div>
//       {!isLoading && data?.data ? <UserAuth user={data?.data?.name} /> : <LoginButton />}
//     </div>
//   );
// };

const UserSection = () => {
 
  const {isAuthenticated,logout,user} = useAuth()

  return (
    <>
      {
        isAuthenticated && user ? <UserAuth user={user} logout={logout} /> : <LoginButton />
      }
    </>
  )
}
const UserAuth = ({ user, logout }: { user: IUserResponse, logout: () => void }) => {
  return (
    <div className="flex items-center gap-1">
      {/* image */}
      <div className="h-12 w-12 border-2 border-blue-500 rounded-full p-1">
        <Image
          // src={"/logo.webp"}
          src={user.profile_image?.path || "/logo.webp"}
          alt="logo"
          height={500}
          width={500}
          className="h-full w-full"
        />
      </div>
      {/* name */}
      <div>
        <p className="text-lg font-semibold  text-blue-500">{user?.first_name + " " + user?.last_name}</p>
        <span className='italic capitalize font-semibold'>{user?.role}</span>
      </div>

      <button onClick={logout} className="flex items-center gap-1 p-2 border border-red-500 rounded ml-2  cursor-pointer">
        <RiLogoutBoxRLine size={24} className="text-red-500" />
        <span className="text-lg font-bold">Logout</span>
      </button>
    </div>
  );
};

const LoginButton = () => {
  return (
    <Link
      href={"/auth/login"}
      className="flex items-center gap-1 p-2 border border-green-500 rounded"
    >
      {/* <RiLogoutBoxRLine size={24} className="text-green-500" /> */}
      <span className="text-lg font-bold">Login</span>
    </Link>
  );
};

export default UserSection;
