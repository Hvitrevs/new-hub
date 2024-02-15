import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const SingleApp = () => {
  return (
    <div className='mt-[15px] rounded-lg xxs:px-3 md:px-5 py-3 border-t-[5px] border-[#dde4eb]  bg-gradient-to-b from-[#cbd2db] to-[#d6dce2]  shadow-[#aeb8c0] shadow-lg dark:border-[#2c2f4a] dark:shadow-[#171a31] dark:bg-none hover:shadow-[#fa5ef2] hover:shadow-xl backdrop-blur-md z-50'>
      <div className='flex justify-start text-start flex-wrap max-w-[350px]'>
              <Image
                className="w-full h-auto object-cover rounded-xl"
                src="/avatar.jpg"
                alt="icon"
                height={150}
                width={150}
              />
              <div className="left-0 right-0 mt-[-10rem] bg-[#000000]/50 px-4 w-full ">
                <h1 className='mt-2 text-[15px] font-bold text-[#dfe1ed]'>
                  Placeholder Title
                </h1>
                <p className='mt-2 xxs:text-[13px] text-[15px] tracking-[.08em] xxs:text-[#9599c2] md:text-[#a5a7ba] dark:text-[#9fadbd] font-semibold'>
                  placeholder description In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                </p>

              </div>
              <div className='mt-4 hover:text-pink-500'>
                <Link 
                className='xxs:text-[18px] md:text-[25px] pr-5'  
                href='https://github.com/Hvitrevs'>
                  <FaGithub />
                </Link>
              </div>


            </div>
    </div>
  )
}

export default SingleApp