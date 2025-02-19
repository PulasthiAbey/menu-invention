import type { Metadata } from "next";
import localFont from "next/font/local";
import { Breadcrumb, Header, Sidebar } from "@/components/layout";

import "@/styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CLOIT - Dashoard",
  description: "Dashboard for CLOIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="ml-64 flex-1">
          <Header />
          <Breadcrumb />
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
