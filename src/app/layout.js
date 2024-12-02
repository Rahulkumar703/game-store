import "./globals.css";
import Footer from "@/components/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { Pixelify_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/tooltip";
import SocialIcons from "@/components/social";

const siteFont = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "auto",
});

export const metadata = {
  title: "Yono Game Store",
  description: "Download the best games on the market to earn rewards.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${siteFont.className} antialiased`}>
        <ClerkProvider>
          <SidebarProvider defaultOpen={true}>
            <TooltipProvider>
              <AppSidebar />
              <div className="flex flex-col flex-1">
                <Header />
                <main className="flex flex-col p-4">{children}</main>
                <SocialIcons />
                <Footer />
              </div>
            </TooltipProvider>
          </SidebarProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
