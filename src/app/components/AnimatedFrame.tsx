"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  framePic: StaticImageData; // specify the type of framePic
}

const AnimatedFrame: React.FC<Props> = ({ framePic }) => {
  return (
    <motion.div
      className="w-full md:w-[80%]  h-auto border-2 border-dark/50 dark:border-light/50 p-1  bg-gray-200 dark:bg-gray-600 rounded-bl-2xl rounded-tr-2xl  shadow-dark dark:shadow-light"
      style={{
        borderColor:
          "linear-gradient(113deg, #04171C -16.34%, rgba(4, 23, 28, 0.28) -6.63%, rgba(4, 23, 28, 0.45) 13.75%, rgba(4, 23, 28, 0.27) 62.17%, rgba(4, 23, 28, 0.00) 109.53%))",
      }}
      animate={{
        scale: 1.01,
        borderColor: [
          "#B9F03E",
          "#F0AF3E",
          "#9B695C",
          "#00EFD0",
          "#706855",
          "#F0EA3E",
          "#F05463",
        ],
        transition: { duration: 10, repeat: Infinity },
      }}
    >
      <Image
        src={framePic}
        alt="man sitting"
        className="w-full h-auto rounded-bl-xl rounded-tr-xl"
      ></Image>
    </motion.div>
  );
};

export default AnimatedFrame;
