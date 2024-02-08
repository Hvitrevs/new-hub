'use client'
import ThemeSwitch from './components/ThemeSwitch';
import Image from 'next/image';

import { useTheme } from 'next-themes'
import HeroFirst from './components/HeroFirst';

export default function Home() {
  return (
    <main className='w-full h-full relative '>
      <div className="flex px-[10rem] py-[10rem] gap-20 flex-nowrap">
        <HeroFirst />
      </div>
    </main>
  );
}
