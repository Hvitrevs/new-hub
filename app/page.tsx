'use client'

import Image from 'next/image';

import { useTheme } from 'next-themes'
import ThemeSwitch from './components/ThemeSwitch';


export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center bg-[#c2d2e5] dark:bg-[#1d213d]'>
        <div className=' pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
        <ThemeSwitch />
        </div>
        
      </div>
      
    </main>
  );
}
