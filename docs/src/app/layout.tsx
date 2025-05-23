import type { Metadata } from "next";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
        <AppSidebar />
        <SidebarInset>
          <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
            <div className="flex h-14 w-full items-center gap-2 px-4">
              <SidebarTrigger />
              <AppNavbar />
              <div className="ml-auto flex items-center gap-2">
                <p>Right</p>
              </div>
            </div>
          </header>

          <main>
            {children}
          </main>
        </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
