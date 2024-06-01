import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./_components/Topbar";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        {modal}
        {children}
      </body>
    </html>
  );
}
