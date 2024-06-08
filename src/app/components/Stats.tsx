"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Stats = () => {
  return (
    <div className="flex items-center justify-between w-full mt-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className="dark:bg-lightGradient  bg-darkGradient bg-clip-text tracking-tighter text-transparent font-black text-7xl sm:text-6xl xs:text-4xl">
          <AnimatedNumbers value={50} />+
        </h2>
        <p className="text-sm sm:text-xs sm:font-medium text-[#565854] dark:text-primaryDark  font-extrabold">
          Projects
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="dark:bg-lightGradient  bg-darkGradient bg-clip-text tracking-tighter text-transparent font-black text-7xl sm:text-6xl xs:text-4xl">
          <AnimatedNumbers value={30} />+
        </h2>
        <p className="text-sm sm:text-xs sm:font-medium text-[#565854] dark:text-primaryDark font-extrabold">
          Happy Clients
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="dark:bg-lightGradient  bg-darkGradient bg-clip-text tracking-tighter text-transparent font-black text-7xl sm:text-6xl xs:text-4xl">
          <AnimatedNumbers value={10} />+
        </h2>
        <p className="text-sm sm:text-xs sm:font-medium text-[#565854] dark:text-primaryDark  font-extrabold">
          Platforms
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="dark:bg-lightGradient  bg-darkGradient bg-clip-text tracking-tighter text-transparent font-black text-7xl sm:text-6xl xs:text-4xl">
          <AnimatedNumbers value={3} />+
        </h2>
        <p className="text-sm sm:text-xs sm:font-medium text-[#565854] dark:text-primaryDark  font-extrabold sm:max-w-10">
          Years Of Experience
        </p>
      </div>
    </div>
  );
};

export default Stats;
