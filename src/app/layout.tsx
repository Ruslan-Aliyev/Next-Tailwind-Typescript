import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./_components/Topbar";
import {getServerSession} from 'next-auth';
import Logout from "./_components/Logout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery",
};

export default async function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <nav>
          {!!session && <Logout />}
          {!session && <Link href="/login">Login</Link>}
          {!session && <Link href="/register">Register</Link>}
        </nav>
        {modal}
        {children}
      </body>
    </html>
  );
}
