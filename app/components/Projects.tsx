/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import React from 'react'
import Liker from './Liker'
import SingleApp from './SingleApp'

export const Projects = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='xxs:mt-[-700px] md:mt-[2px] xxs:pr-4 xxs:pl-2  md:pb-1 flex flex-col gap-2 z-[10] max-w-[850px]'>
          <h4 className='md:text-[18px] xxs:text-[9px] xxs:font-bold md:font-normal'>
            See what
          </h4>
          <h2 className='flex flex-row flex-nowrap md:text-[45px] xxs:text-[27px] font-bold'>
            <span className='mr-2'>Apps</span>
            <span className='text-[#ff7944]'>I've built 🛸</span>
          </h2>

          <div className='mt-[15px] grid grid-col-3 grid-row-2 rounded-lg xxs:px-3 md:px-5 py-3 border-t-[5px] border-[#dde4eb]  bg-gradient-to-b from-[#cbd2db] to-[#d6dce2]  shadow-[#aeb8c0] shadow-lg dark:border-[#2c2f4a] dark:shadow-[#171a31] dark:bg-none'>
            {<SingleApp />}
          </div>

        </div>
      </div>
    </>
  )
}
