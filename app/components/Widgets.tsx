import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: React.ReactNode;
};

const Widgets = (props: Props) => {
  return (
    <div>
        <motion.div
          
          className='Welcome-text  mt-[15px] rounded-sm bg-gradient-to-b from-[#c8dbf0] to-transparent border-[2px] border-[#b4c2ce] dark:border-t-[4px] dark:border-[#202445] dark:shadow-[#171a31] dark:text-[#5e6393] dark:bg-none'
        >
            <div 
            className="Welcome-box py-[3px] px-[8px] opacity-[0.9] "
            >
              <div className="md:px-[2px] xs:py-[2px] sm:py-[2px] md:h-4 md:w-4 xs:h-4 xs:w-3 xxs:w-2 xs:mr-[1px]">
                {props.icon}
              </div>
                  <h1
                    className=" Welcome-text  md:text-[12px] md:h-4 px-[5px] xs:text-[8px] xs:text-nowrap xxs:text-[5px] xxs:pr-0 border-l-[2px] border-[#7042f88b] opacity-[0.9]"
                  >
                {props.title}
              </h1>
            </div>
        </motion.div>
    </div>
  );
};

export default Widgets;