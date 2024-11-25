import { Club, Gamepad2, Home, Swords } from "lucide-react";

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
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// Menu items.
const homeItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "All Games",
    url: "/top-games",
    icon: Swords,
  },
  {
    title: "Top Games",
    url: "top-games",
    icon: Gamepad2,
  },
  {
    title: "Rummy",
    url: "/rummy",
    icon: Club,
  },
];

const dashboardItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "All Games",
    url: "/dashboard/top-games",
    icon: Swords,
  },
  {
    title: "Top Games",
    url: "/dashboard/top-games",
    icon: Gamepad2,
  },
  {
    title: "Rummy",
    url: "/dashboard/rummy",
    icon: Club,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
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
              {/* <SidebarMenuItem>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </SidebarMenuItem> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
