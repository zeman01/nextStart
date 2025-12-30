'use client'

import { checkAuth, logoutUser } from "@/api/auth.api";
import { IUserResponse } from "@/types/auth.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type AuthType = {
    user: IUserResponse | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    logout: () => void;
};

const initialValue: AuthType = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    logout: () => { },
};

// ! context

export const AuthContext = React.createContext<AuthType>(initialValue);

// !provider

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter()

    const { data, isLoading } = useQuery({
        queryFn: checkAuth,
        queryKey: ['check-auth'],
        retry: false,
        staleTime: 5 * 60 * 1000
    })

    // logout 
    // mutation
    const {mutate,isPending } = useMutation({
        mutationFn:logoutUser,
        onSuccess: (response) => {
            toast.success(response.message || 'Logout successful')
            router.push('/auth/login')
            
        },
         onError: (error) => {
            toast.error(error.message || 'Something went wrong')
            
        }
    })

    const logout = () => {
        // mutate
        mutate()
        console.log('logout clicked')
    }
    
    return (
        <AuthContext.Provider
            value={{
                user: data?.data || null,
                logout,
                isLoading: isLoading || isPending,
                isAuthenticated: !!data?.data,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider
