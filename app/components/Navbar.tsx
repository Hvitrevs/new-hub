'use client'

import React from 'react'
import ThemeSwitch from './ThemeSwitch'


const Navbar = () => {

  return (
    <div className='flex '>
      <div className='flex 2xl:ml-[1250px] xl:ml-[1000px] md:ml-[25rem] lg:ml-[35rem] xxs:p-[3px] xxs:mt-1 xxs:ml-[6rem] xs:ml-[9rem] md:mt-[20px] bg-[#d2d8e0] dark:bg-[#1d213d]  px-4 border-[1px] border-b-[4px] border-[#bec6cd] border-b-[#e7e8f4]  dark:border-[#171a31] dark:border-b-[#222649] shadow-[#a9b6c0] shadow-inner shadow-2xl dark:shadow-[#0f1224] dark:text-[#5e6393] rounded-2xl justify-between z-[40] items-center gap-5 fixed md:visible xxs:invisible'>

      <div className='flex flex-row gap-3 items-center border-r-[2px] border-[#bec6cd] dark:border-[#2c3158]'>

        {/* logo */}
        <h1 className=' xxs:invisible md:visible flex flex-row flex-nowrap px-3 md:text-[15px] xxs:text-[12px] font-bold dark:text-[#aec1d4]'>
          Hivt
          <span className='text-[#ff7944]'>
            revs🦊
          </span>
        </h1>

      </div>

      <div className='flex items-center px-2 py-1 xxs:visible'>
        <div className='md:p-[8px] xxs:p-[3px] border-t-[4px] light:border-[#dde4eb] light:bg-gradient-to-b from-[#cbd2db] to-[#e5e9ed]  shadow-[#aeb8c0] shadow-md dark:border-[#232645] dark:shadow-[#171a31] dark:text-[#5e6393] dark:bg-gradient-to-b from-[#1d1e39] to-[#252954]  rounded-2xl '>
          <ThemeSwitch />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar