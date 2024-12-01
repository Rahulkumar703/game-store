import { Club, Gamepad2, Home, LogIn, LogOut, Swords } from "lucide-react";

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
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { H4 } from "./ui/typography";
import { Button } from "./ui/button";
import Title from "./title";

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
    url: "/all-games",
    icon: Swords,
  },
  {
    title: "Top Games",
    url: "/top-games",
    icon: Gamepad2,
  },
  // {
  //   title: "Rummy",
  //   url: "/rummy",
  //   icon: Club,
  // },
];

export async function AppSidebar() {
  const session = await currentUser();

  return (
    <Sidebar variant="sidebar">
      <SidebarContent >
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
                {/* <SidebarMenuItem className="mt-auto">
                  <SidebarMenuButton asChild>
                    <div className="flex items-center justify-start">
                      <LogIn className="w-4 h-4 mr-2" />
                      <SignInButton className="" />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem> */}
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

                  <div className="flex justify-between gap-2 items-center p-2 relative z-20">
                    <div className="flex items-center gap-2">
                      <UserButton className="z-20" />
                      <H4>{session?.firstName}</H4>
                    </div>
                    <Title content={'Log out'} asChild className={'shrink-0'} >
                      <SignOutButton className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 px-3 w-9 cursor-pointer'>
                        <LogOut className="w-4 h-4" />
                      </SignOutButton>
                    </Title>
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
