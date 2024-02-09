import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-y-scroll-hidden overflow-x-hidden select-none  mx-auto tracking-[.1em] bg-[#d2d8e0] dark:bg-[#1d213d] text-[#686c98] dark:text-[#97a8bc]`} >
      <Providers>
        <Navbar />
          {children}
        
      </Providers>
      </body>
    </html>
  );
}
