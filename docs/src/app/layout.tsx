import type { Metadata } from "next";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app/appsidebar";
import { AppNavbar } from "@/components/app/appnavbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "KoalaDB - Docs",
  description: "Documentation for KoalaDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
        <AppSidebar/>
        <main>
          <AppNavbar/>
          <SidebarTrigger />
          {children}
        </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
