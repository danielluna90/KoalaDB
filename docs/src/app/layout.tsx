import type { Metadata } from "next";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app/appsidebar";
import { ThemeProvider } from "@/components/app/theme-provider";

import "./globals.css";
import { ThemeToggle } from "@/components/app/theme-toggle";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
            <div className="flex h-18 w-full items-center gap-2 px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className="font-black text-xl">KoalaDB</h1>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="p-4">
            {children}
          </main>

          <footer className="p-4">
            © 2025 Daniel Luna
          </footer>
        </SidebarInset>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
