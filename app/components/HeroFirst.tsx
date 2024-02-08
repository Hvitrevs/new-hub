/* eslint-disable react/no-unescaped-entities */
'use client'


import { FaCodepen, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch'; // Assuming ThemeSwitch is another component you've defined
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroFirst = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='pl-40 md:pl-40 pb-30 md:pb-20 flex flex-col gap-2 z-[10] max-w-[850px]'>
          <h4>
            Hello
          </h4>
          <h2 className='flex flex-row flex-nowrap text-[45px] font-bold'>
            <span>I'm Hvit</span>
            <span className='text-[#ff7944]'> revs 🦊</span>
          </h2>
          <h4 className='font-bold text-[25px]'>
            I like building web apps
          </h4>
          <span className='mt-[15px] rounded-lg px-3 py-5 border-l-0 bg-gradient-to-b from-[#d0e2f7] to-transparent shadow-[#90abbf] shadow-2xl dark:border-t-[4px] dark:border-[#202445] dark:shadow-[#171a31] dark:text-[#5e6393] dark:bg-none'>
            I am fascinated with AI and Machine Learning. Currently I am working on designing and creating different user-friendly websites and applications.
          </span>

          <div className='py-5 flex flex-nowrap gap-4 px-1 text-[25px]'>
            <Link 
            className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120 duration-300'  href='https://github.com/Hvitrevs'>
              <FaGithub />
            </Link>

            <div className='gap-4 px-1 text-[25px] text-[#ff7944] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120 duration-300'>
              <Link 
              className='' 
              href="https://codepen.io/Hvitrevs">
                <FaCodepen />
              </Link>
            </div>
          </div>
          <ThemeSwitch />
        </div>
      </div>

      <div className='max-w-[350px]'>
      <Image
          className="filter-grayscale opacity-[80%]  animate-bounce"
          src="/abstract1.png"
          alt="icon"
          height={350}
          width={350}
        />
      </div>
    </>
  );
}

export default HeroFirst;