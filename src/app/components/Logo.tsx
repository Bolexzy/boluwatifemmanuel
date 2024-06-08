"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center -mt-4 ">
      <MotionLink
        href={"/#"}
        className="w-[30px] h-[60px] p-2 bg-none border-2 rounded-2xl flex items-center justify-center "
        style={{
          borderColor:
            "linear-gradient(113deg, #04171C -16.34%, rgba(4, 23, 28, 0.28) -6.63%, rgba(4, 23, 28, 0.45) 13.75%, rgba(4, 23, 28, 0.27) 62.17%, rgba(4, 23, 28, 0.00) 109.53%))",
        }}
        whileHover={{
          scale: 1.1,
          borderColor: [
            "#B9F03E",
            "#F0AF3E",
            "#9B695C",
            "#00EFD0",
            "#706855",
            "#F0EA3E",
            "#F05463",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        <div className="flex flex-col items-center gap-auto dark:text-light">
          <h2 className="text-sm font-medium ">B</h2>
          <div className="w-1 h-1 rounded-full bg-dark dark:bg-light"></div>
          <h2 className="text-sm font-medium ">E</h2>
        </div>
      </MotionLink>
    </div>
  );
};

export default Logo;
