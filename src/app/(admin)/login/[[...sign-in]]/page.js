import { SignIn } from "@clerk/nextjs";
import React from "react";

export const metadata = {
  title: 'Login | Yono Game Store',
  description: 'Admin Login Section for Yono Game Store',
}


const AdminLogin = () => {
  return (
    <section className="container mx-auto bg-background flex items-center justify-center h-[calc(100vh-125.8px)]">
      <SignIn afterSignOutUrl="/" />
    </section>
  );
};

export default AdminLogin;
