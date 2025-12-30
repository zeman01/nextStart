/*eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useAuth } from "@/hooks/auth.hook";
import { USER_ROLE } from "@/types/global.types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const withAuth = (Component: any, roles: USER_ROLE[]) => {
  const ProtectedComponent = (props: any) => {
    const router = useRouter();
    const { user, isAuthenticated, isLoading } = useAuth();
    // auth logic here

    if (isLoading) return null;
    if (!user || !isAuthenticated) {
      if (typeof window !== "undefined") {
        toast.error("You must be logged in to access this page");
        router.push("/auth/login");
      }
      return null;
    }
    if (user && roles.includes(user?.role)) {
      if (typeof window !== "undefined") {
        toast.error("Forbidden: You don't have permission to access this page");
        router.replace("/");
      }
      return null;
    }
    return <Component {...props} />;
  };
  return ProtectedComponent;
};

export default withAuth;
