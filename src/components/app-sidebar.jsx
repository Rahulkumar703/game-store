import { Club, Gamepad2, Home, LogIn, Swords } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { H4 } from "./ui/typography";

// Menu items.
const homeItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "All Games",
    url: "/all-games",
    icon: Swords,
  },
  {
    title: "Top Games",
    url: "top-games",
    icon: Gamepad2,
  },
  // {
  //   title: "Rummy",
  //   url: "/rummy",
  //   icon: Club,
  // },
];

// Dashboard Items
const dashboardItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "All Games",
    url: "/dashboard/all-games",
    icon: Swords,
  },
  {
    title: "Top Games",
    url: "/dashboard/top-games",
    icon: Gamepad2,
  },
  // {
  //   title: "Rummy",
  //   url: "/dashboard/rummy",
  //   icon: Club,
  // },
];

export async function AppSidebar() {
  const session = await currentUser();

  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup className="h-full">
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="flex h-full">
              <SignedOut>
                {homeItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className="hover:text-red-500 py-6 font-semibold"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem className="mt-auto">
                  <SidebarMenuButton asChild>
                    <div className="flex items-center justify-start">
                      <LogIn className="w-4 h-4 mr-2" />
                      <SignInButton className="" />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SignedOut>

              <SignedIn>
                {dashboardItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className="hover:text-red-500 py-6 font-semibold"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                <SidebarMenuItem className="mt-auto">
                  <div className="flex gap-2 items-center p-2">
                    <UserButton />
                    <H4>{session?.firstName}</H4>
                  </div>
                </SidebarMenuItem>
              </SignedIn>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
