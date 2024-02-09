'use client'

import React from 'react'
import ThemeSwitch from './ThemeSwitch'


const Navbar = () => {

  return (
    <div className='w-full xl:h-[60px] md:py-8 xxs:h-[35px] fixed top-0  z-50 lg:px-5 sm:px-[180px] xxs:px-[30px] bg-[#d2d8e0] dark:bg-[#1d213d] fixed '>

      <div className='flex xl:ml-[250px] md:ml-20 xxs:p-[3px] xxs:ml-[5rem] bg-[#d2d8e0] dark:bg-[#1d213d] px-2 border-[1px] border-b-[4px] border-[#bec6cd] border-b-[#e7e8f4]  dark:border-[#171a31] dark:border-b-[#222649] shadow-[#a9b6c0] shadow-inner shadow-2xl dark:shadow-[#0f1224] dark:text-[#5e6393] rounded-2xl justify-between z-40 items-center gap-3 fixed md:visible xxs:invisible top-2'>

      <div className='flex flex-row gap-3 items-center border-r-[2px] border-[#bec6cd] dark:border-[#2c3158]'>

        {/* logo */}
        <h1 className=' xxs:invisible md:visible flex flex-row flex-nowrap px-3 md:text-[15px] font-bold dark:text-[#aec1d4]'>
          Hivt
          <span className='text-[#ff7944]'>
            revs🦊
          </span>
        </h1>

      </div>

      <div className='flex items-center  px-2 py-1 xxs:visible'>
        <div className='md:p-[8px] xxs:p-[3px] border-t-[4px] light:border-[#dde4eb] light:bg-gradient-to-b from-[#cbd2db] to-[#e5e9ed]  shadow-[#aeb8c0] shadow-md dark:border-[#232645] dark:shadow-[#171a31] dark:text-[#5e6393] dark:bgnone  rounded-2xl '>
          <ThemeSwitch />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar