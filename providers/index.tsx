import React from "react";
import QueryProvider from "./react-query.provider";
import AuthProvider from "@/context/auth.context";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
};

export default Providers;
