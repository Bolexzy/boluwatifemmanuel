"use client";
import React, { useEffect, useRef } from "react";
import { DotIcon } from "./Icons";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const slide = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

const display = {
  initial: {
    display: "none",
  },
  animate: {
    display: "block",
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const CustomSkill = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const skills = [
    { name: "React/js", image: "/images/react.svg" },

    { name: "Tailwind CSS", image: "/images/ts.svg" },
    { name: "Javascript", image: "/images/js.svg" },
    // NodeJS
    { name: "NodeJS", image: "/images/node.svg" },
    // MongoDB
    { name: "MongoDB", image: "/images/mongodb.svg" },
    // ExpressJS
    { name: "ExpressJS", image: "/images/express.svg" },
    // HTML
    { name: "HTML", image: "/images/html.svg" },
    // CSS
    { name: "CSS", image: "/images/css.svg" },
    // Tailwind CSS
    { name: "Tailwind CSS", image: "/images/tailwind.svg" },
    // mySql
    { name: "mySql", image: "/images/mysql.svg" },
    // Firebase
    { name: "Firebase", image: "/images/firebase.svg" },
    // MUI
    { name: "MUI", image: "/images/mui.svg" },
    // Figma
    { name: "Figma", image: "/images/figma.svg" },
    // Bootstrap
    { name: "Bootstrap", image: "/images/bootstrap.svg" },
  ];
  return (
    <div
      className="w-full flex mt-16  flex-row flex-wrap items-center justify-center gap-y-10 gap-x-8"
      ref={ref}
    >
      {skills.map((skill, index) => (
        <motion.div
          className="flex flex-col items-center justify-center gap-2 group"
          key={index}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 2, type: "spring", bounce: 0.5 }}
          whileHover={"animate"}
        >
          <div className="w-[80px] lg:w-[50px] sm:w-[35px]">
            <Image
              src={`${skill.image}`}
              alt="language logo"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
          <motion.div
            className="text-dark dark:text-light  p-4 lg:p-2 sm:p-1 rounded-full  font-bold capitalize text-center"
            whileHover={{ scale: 1.05 }}
          >
            {skill.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CustomSkill;
