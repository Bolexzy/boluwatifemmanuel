"use client";
import Link from "next/link";
import React from "react";
import { GitHubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className="flex flex-col items-center  justify-center gap-y-8 lg:gap-y-4  fixed z-50 top-[20%] xl:top-[20%] right-[10%] sm:right-[2%] backdrop-blur-md rounded-2xl lg:top-[2%] w-16 max-w-md h-auto p-4 lg:p-1 ">
      <Link
        className="group relative flex items-center hover:text-accent transition-all duration-300"
        href={"https://x.com/Bolexzyy__"}
        target="_blank"
      >
        {/* tooltip */}
        <motion.div
          className="absolute pr-14 right-0 opacity-0"
          whileHover={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <div className="bg-[#525252] dark:bg-light/75 dark:text-dark relative flex text-light items-center p-[6px]">
            <div className="text-sm leading-none font-semibold capitalize">
              twitter
            </div>
            {/* triangle */}
            <div className="border-solid border-l-[#525252] dark:border-l-light/75 border-l-8 border-y-transparent border-y-[12px] border-r-0 absolute -right-2"></div>
          </div>
        </motion.div>

        {/* social icon */}
        <div className="w-full ">
          <TwitterIcon className="!w-10 lg:!w-8 sm:!w-6 z-50" />
        </div>
      </Link>

      <Link
        className="group relative flex items-center hover:text-accent transition-all duration-300"
        href={"https://github.com/Bolexzy"}
        target="_blank"
      >
        {/* tooltip */}
        <motion.div
          className="absolute pr-14 right-0 opacity-0"
          whileHover={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <div className="bg-[#525252] dark:bg-light/75 dark:text-dark relative flex text-light items-center p-[6px]">
            <div className="text-sm leading-none font-semibold capitalize">
              GitHub
            </div>
            {/* triangle */}
            <div className="border-solid border-l-[#525252] dark:border-l-light/75 border-l-8 border-y-transparent border-y-[12px] border-r-0 absolute -right-2"></div>
          </div>
        </motion.div>

        {/* social icon */}
        <div className="w-full">
          <GitHubIcon className="!w-10 lg:!w-8 sm:!w-6 z-50" />
        </div>
      </Link>
      <Link
        className="group relative flex items-center hover:text-accent transition-all duration-300"
        href={"https://www.linkedin.com/in/boluwatifeo/"}
        target="_blank"
      >
        {/* tooltip */}
        <motion.div
          className="absolute pr-14 right-0 opacity-0"
          whileHover={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <div className="bg-[#525252] dark:bg-light/75 dark:text-dark relative flex text-light items-center p-[6px]">
            <div className="text-sm leading-none font-semibold capitalize">
              LinkedIn
            </div>
            {/* triangle */}
            <div className="border-solid border-l-[#525252] dark:border-l-light/75 border-l-8 border-y-transparent border-y-[12px] border-r-0 absolute -right-2"></div>
          </div>
        </motion.div>

        {/* social icon */}
        <div className="w-full">
          <LinkedinIcon className="!w-10 lg:!w-8 sm:!w-6 z-50" />
        </div>
      </Link>
    </div>
  );
};

export default Socials;
