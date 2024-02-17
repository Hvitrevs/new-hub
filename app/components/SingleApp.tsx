import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {  PiFlyingSaucer } from 'react-icons/pi'
import Widgets from './Widgets'


const SingleApp = () => {
  return (

    <div className=' mt-[15px] mb-6 rounded-lg xxs:px-3 md:px-6 py-3 border-t-[5px] border-[#dde4eb]  bg-gradient-to-b from-[#cbd2db] to-[#d6dce2]  shadow-[#aeb8c0] shadow-lg dark:border-[#2c2f4a] dark:shadow-[#171a31] dark:bg-none backdrop-blur-md z-50'>
      <div className='flex justify-start text-start flex-wrap max-w-[250px]'>
              <Image
                className="w-full h-auto object-cover rounded-xl"
                src="/avatar.jpg"
                alt="icon"
                height={250}
                width={250}
              />
              <div className="left-0 right-0 mt-[-9rem] bg-[#0e122c]/60 px-4 w-full h-auto backdrop-blur-sm z-50">
                <h1 className='mt-2 text-[15px] font-bold text-[#dfe1ed]'>
                  Placeholder Title
                </h1>
                <p className='mt-1 xxs:text-[11px] md:text-[12px] 2xl:text-[13px] md:text-[#c7c9da] dark:text-[#c6d0db] font-light'>
                  placeholder description In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                </p>

              </div>
              <div className='flex flex-wrap'>
                <div className='w-full flex flex-wrap'>
                  <Widgets />
                </div>
                <div className='w-full flex flex-wrap mt-4 mb-1 justify-start gap-4'>
                  <Link className='xxs:text-[18px] md:text-[25px] flex hover:text-cyan-500' href='https://github.com/Hvitrevs'>
                    <FaGithub />
                  </Link>
                  <Link className='xxs:text-[18px] md:text-[25px] text-[#ff7944] flex hover:text-green-500' href='https://github.com/Hvitrevs'>
                    <PiFlyingSaucer />
                  </Link>
                </div>
              </div>

            </div>
    </div>
  )
}

export default SingleApp