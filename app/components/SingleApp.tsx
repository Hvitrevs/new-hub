import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {  PiFlyingSaucer } from 'react-icons/pi'
import Widgets from './Widgets'
import { projectDetails } from './data/Data'


const SingleApp = () => {
  return (
    <>
      {projectDetails.map(project => (
        <div  key={project.id}  className='flex mt-[1rem] h-full mb-10 rounded-lg xxs:px-3 md:px-6 py-10 xl:min-w-[300px] md:min-w-[250px] border-t-[5px] border-[#dde4eb]  bg-gradient-to-b from-[#cbd2db] to-[#d6dce2]  shadow-[#aeb8c0] shadow-lg dark:border-[#2c2f4a] dark:shadow-[#171a31] dark:bg-none'>
          <div className='flex justify-start text-start flex-wrap max-w-[350px]'>
              <Image
                className="w-full h-[80%] object-cover rounded-xl"
                src={project.project_img}
                alt="img"
                height={450}
                width={450}
              />
              <div className="left-0 right-0 mt-[-8rem] bg-[#0e122c]/60 px-4 w-full h-auto backdrop-blur-sm z-50">
                <h1 className='mt-2 xxs:text-[10px] xxs:mt-3 md:text-[15px] font-bold text-[#dfe1ed]'>
                  {project.project_name}
                </h1>
                <p className='md:mt-1 xs:mt-3 xs:text-[10px] xxs:text-[9px] md:text-[11px] 2xl:text-[12px] md:text-[#c7c9da] dark:text-[#c6d0db] font-light'>
                  {project.project_desc}
                </p>

              </div>
              <div className='flex flex-wrap'>
                <div className='w-full flex flex-wrap'>
                  <Widgets title='' icon=''/>
                </div>
                <div className='w-full flex flex-wrap mt-4 mb-4 justify-start gap-4'>
                  <Link className='xxs:text-[18px] md:text-[25px] flex hover:text-cyan-500' href={project.project_page}>
                    <FaGithub />
                  </Link>
                  <Link className='xxs:text-[18px] md:text-[25px] text-[#ff7944] flex hover:text-green-500' href={project.project_url}>
                    <PiFlyingSaucer />
                  </Link>
                </div>
              </div>

            </div>
   
      </div>
     ))}
    </>
    
      
    
  )
}

export default SingleApp