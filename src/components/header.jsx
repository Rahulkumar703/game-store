import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { H1 } from "./ui/typography";
import { Pixelify_Sans } from "next/font/google";

const headerFont = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "auto",
});
const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 py-3 bg-sidebar border border-transparent border-b-sidebar-border sticky top-0 shadow z-30">
      <SidebarTrigger />
      <H1 className={`font-bold ${headerFont.className}`}>Yono Game Store</H1>
    </header>
  );
};

export default Header;
