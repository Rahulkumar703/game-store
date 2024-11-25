import { SignIn } from "@clerk/nextjs";
import React from "react";

const AdminLogin = () => {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-125.8px)]">
      <SignIn afterSignOutUrl="/" />
    </section>
  );
};

export default AdminLogin;
