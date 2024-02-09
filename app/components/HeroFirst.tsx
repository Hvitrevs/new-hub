/* eslint-disable react/no-unescaped-entities */
'use client'


import { FaCodepen, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Widgets from './Widgets';
import { SparklesIcon, TagIcon } from '@heroicons/react/24/solid';

const HeroFirst = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='xxs:mt-8 md:mt-[2px] xxs:pr-4 xxs:pl-2 xl:pl-40 md:pb-10 flex flex-col gap-2 z-[10] max-w-[850px]'>


          
          <h4 className='md:text-[18px] xxs:text-[9px]'>
            Hello!
          </h4>
          <h2 className='flex flex-row flex-nowrap md:text-[45px] xxs:text-[19px] font-bold'>
            <span>I'm Hvit</span>
            <span className='text-[#ff7944]'> revs 🦊</span>
          </h2>
          <h4 className='font-bold md:text-[25px] xxs:text-[12px]'>
            I like building web apps
          </h4>
          <span className='mt-[15px] md:text-[20px] xxs:text-[13px] rounded-lg xxs:px-3 md:px-3 py-5 border-t-[4px] light:border-[#dde4eb]  light:bg-gradient-to-b from-[#cbd2db] to-[#e5e9ed]  shadow-[#aeb8c0] shadow-lg dark:border-[#222546] dark:shadow-[#171a31] dark:text-[#5e6393] dark:bg-gradient-to-b from-[#1d1e39] to-[#202446]'>
            I am fascinated with AI and Machine Learning. Currently I am working on designing and creating different user-friendly websites and applications.
          </span>

          <div className='md:h-6 md:mt-2 mb-7 flex md:gap-5 justify-start text-start  xs:gap-[3px] xs:h-4  xs:mt-2 xxs:mt-2 xxs:h-4 xxs:gap-[2px] '>
            <Widgets 
                title={'Next.js'} 
                icon={<TagIcon />} 
            />
            <Widgets 
                title={'TypeScript'} 
                icon={<TagIcon />} 
            />
            <Widgets
                title={'React'} 
                icon={<TagIcon />} 
            />
            <Widgets
                title={'API'} 
                icon={<TagIcon />} 
            />


            </div>
          <div className='flex items-center'>
            <div className='py-3 flex flex-nowrap gap-4 px-3 p-2 border-[1px] border-b-[4px] border-[#bec6cd] border-b-[#e7e8f4]  dark:border-[#171a31] dark:border-b-[#222649] shadow-[#aeb8c0] shadow-inner shadow-2xl dark:shadow-[#171a31] dark:text-[#5e6393] rounded-2xl '>
              <Link 
              className='hover:text-pink-500  pr-5 border-r-[4px] border-r-[#d2e1ed] dark:border-r-[#222649] dark:border-b-[#131528]'  href='https://github.com/Hvitrevs'>
                <FaGithub />
              </Link>

              <div className='gap-4 px-1 text-[25px] text-[#ff7944] hover:text-green-500 '>
                <Link 
                className='' 
                href="https://codepen.io/Hvitrevs">
                  <FaCodepen />
                </Link>
              </div>
            </div>
          </div>
          
          </div>
        </div>

      <div className='max-w-[350px] xxs:invisible xl:visible xl:mt-20'>
      <Image
          className="filter-grayscale opacity-[50%] dark:opacity-[90%]  animate-bounce"
          src="/abstract1.png"
          alt="image"
          height={350}
          width={350}
        />
      </div>
    </>
  );
}

export default HeroFirst;