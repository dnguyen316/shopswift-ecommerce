import "@/styles/globals.css";

import { Poppins as FontSans } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";
import TopNav from "./_components/top-nav/top-nav";
import { Suspense } from "react";
import QueryProvider from "./providers/query-client-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shop Swift",
  description: "E-commerce for Technology",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-background-1 font-sans antialiased",
        fontSans.variable,
      )}
    >
      <body>
        <TRPCReactProvider>
          <QueryProvider>
            <Suspense fallback={<></>}>
              <TopNav />
              {children}
            </Suspense>
          </QueryProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
