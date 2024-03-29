import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hvitrevs Hub",
  description: "Apps and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-y-scroll-hidden overflow-x-hidden select-none  mx-auto tracking-[.1em] bg-[#f3f6f8] dark:bg-[#2d2f3e] text-[#373955] dark:text-[#cde3ff]`} >
      <Providers>
        <Navbar />
          {children}
        
      </Providers>
      </body>
    </html>
  );
}
