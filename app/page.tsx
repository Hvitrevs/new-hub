'use client'

import Image from 'next/image';

import { useTheme } from 'next-themes'
import ThemeSwitch from './components/ThemeSwitch';


export default function Home() {
  return (
    <main className='w-full h-full relative '>
      <div className="flex flex-col px-[10rem] py-[10rem] gap-20 ">
        <div className='flex items-center'>
          <div className='pl-40 md:pl-40 pb-30 md:pb-20 flex flex-col gap-2 z-[10] max-w-[850px]'>
            <h4>
              Hello
            </h4>
            <h2 className='flex flex-nowrap text-[45px] font-bold'>
              <h2>I'm Hvit</h2><h2 className='text-[#ff7944]'> revs 🦊
              </h2>
            </h2>
            <h4 className='font-bold text-[25px]'>
                I like building web apps
            </h4>
            <span className='mt-[35px] rounded-lg p-3 border-l-0 bg-gradient-to-b from-[#d0e2f7] to-transparent shadow-2xl dark:border-t-[4px] dark:border-[#202445] dark:shadow-[#171a31] dark:bg-none'>
            I am facinated with AI and Machine Learning. Currently I am working on designing and creating different user-friendly websites and applications.
            </span>
            <ThemeSwitch />
          </div>
          
        </div>
      </div>
      
      
    </main>
  );
}
