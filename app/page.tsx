'use client'

import Image from "next/image";

import { useTheme } from 'next-themes'
import ThemeSwitch from "./components/ThemeSwitch";


export default function Home() {
  return (
    <main>
      <div className='px-[5rem] py-10 dark'>
      <ThemeSwitch />
      </div>
      
    </main>
  );
}
