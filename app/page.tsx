'use client'

import Image from "next/image";

import { useTheme } from 'next-themes'
import ThemeSwitch from "./components/ThemeSwitch";


export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <main className='px-40 py-40'>
      <h1>
        Home
      </h1>
      <ThemeSwitch />
    </main>
  );
}
