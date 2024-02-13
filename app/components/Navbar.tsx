'use client'

import React from 'react'
import ThemeSwitch from './ThemeSwitch'


const Navbar = () => {

  return (
    <div className='w-full xl:h-[60px] md:py-8 xxs:h-[35px] fixed top-0  z-50 lg:px-[1px] sm:px-[180px] xxs:px-[30px] bg-[#d2d8e0] dark:bg-[#22253c] fixed '>

      <div className='flex 2xl:xl:ml-[750px] ml-[550px] lg:ml-[380px] md:ml-[120px] sm:ml-[250px] xxs:p-[2px] xxs:ml-[5px] bg-[#d2d8e0] dark:bg-[#22253c] border-[1px] border-b-[4px] border-[#bec6cd] border-b-[#e7e8f4]  dark:border-[#171a31] dark:border-b-[#2c2f4a] shadow-[#a9b6c0] shadow-inner shadow-2xl dark:shadow-[#0f1224] dark:text-[#5e6393] rounded-2xl justify-between z-50 items-center gap-3 fixed top-2'>

      <div className='flex flex-row gap-2 items-center border-r-[2px] border-[#bec6cd] dark:border-[#2c3158]'>

        {/* logo */}
        <h1 className='flex flex-row flex-nowrap px-3 xxs:text-[10px] md:text-[15px] font-bold dark:text-[#aec1d4]'>
          Hivt
          <span className='text-[#ff7944]'>
            revs🦊
          </span>
        </h1>

      </div>

      <div className='flex items-center  px-2 py-1 xxs:visible'>
        <div className='md:p-[8px] xxs:p-[3px] xxs:text-[15px] md:text-[18px] border-t-[4px] light:border-[#dde4eb] light:bg-gradient-to-b from-[#cbd2db] to-[#e5e9ed]  shadow-[#aeb8c0] shadow-md dark:border-[#232645] dark:shadow-[#171a31] dark:text-[#5e6393] dark:bgnone  rounded-2xl '>
          <ThemeSwitch />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar