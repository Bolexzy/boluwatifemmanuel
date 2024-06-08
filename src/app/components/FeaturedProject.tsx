"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GitHubIcon, LinkArrowIcon } from "./Icons";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

type Tool = {
  name: string;
  image: string;
};

const FeaturedProject = ({
  key,
  index,
  type,
  title,
  description,
  image,
  link,
  github,
  tools,
}: {
  key: number;
  index: number;
  type: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string | "";
  tools: Tool[];
}) => {
  return (
    <article
      className="w-full flex items-center justify-between bg-light dark:bg-dark  p-12 lg:flex-col lg:mt-5 lg:p-8 xs:p-4 md:p-0"
      key={key}
    >
      <Link
        href={link}
        target="_blank"
        className={`${
          (index + 2) % 2 === 0 ? "order-1" : "order-2"
        } lg:order-1 w-2/5 lg:w-4/5 md:w-full cursor-pointer overflow-hidden rounded-xl border-dark/50 dark:border-light/50 border-2 shadow-2xl bg-gray-600`}
      >
        <MotionImage
          width={400}
          height={100}
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl "
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        ></MotionImage>
      </Link>

      <motion.div
        className="w-1/2 lg:w-4/5 md:w-full flex  flex-col items-start justify-center px-6 lg:px-0 lg:py-8 order-1 lg:order-0 "
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 5, type: "spring", bounce: 0.5 }}
      >
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl sm:text-base ">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark/75 dark:text-light/75 text-base sm:text-sm  tracking-wide">
          {description}
        </p>
        <div className="w-full my-2 flex items-center flex-wrap gap-3 ">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="w-10 rounded-md text-xs border-secondary dark:border-light/25 text-dark/75 dark:text-light/75 hover:border-dark/50 hover:dark:border-light/50 border-2 text-center flex items-center justify-center shadow-xl transition-all ease-in-out duration-300"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
            >
              <div className="w-8 h-8">
                <Image
                  src={tool?.image || ""}
                  className="w-full"
                  width={50}
                  height={50}
                  alt="technology icon"
                />
              </div>
              {/* {tool} */}
            </motion.div>
          ))}
        </div>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="dark:text-light">
            <GitHubIcon className="!w-6" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-primary hover:text-dark/50 hover:dark:text-light/50"
          >
            <LinkArrowIcon className="!w-6 ml-1" />
          </Link>
        </div>
      </motion.div>
    </article>
  );
};

export default FeaturedProject;
