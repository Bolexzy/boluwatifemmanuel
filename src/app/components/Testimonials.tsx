"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { QuoteIcon } from "./Icons";

const Testimonials = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <article
      className="w-full flex items-center justify-center mx-auto px-auto"
      ref={ref}
    >
      <div className="max-w-6xl w-full  flex gap-8 items-center overflow-x-auto h-screen relative no-scrollbar">
        <motion.div
          className="flex flex-col text-center w-[500px] lg:w-[450px] md:w-[380px] h-[300px] flex-shrink-0 p-8 md:p-12   "
          initial={{ x: 200 }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          <div className="text-dark/50 dark:text-light/50">
            <QuoteIcon className="w-12 mb-8" />
          </div>

          <p className="my-4 font-bold max-w-md dark:text-light">Emma Watson</p>
          <p className="mb-4 font-medium max-w-md text-primaryDark">
            Senior Software Engineer
          </p>

          <p className="my-4 font-medium max-w-md text-dark/50 dark:text-light/75 md:text-sm">
            Emmanuel's dedication to our project was impressive. He was always
            available for feedback and went the extra mile to deliver quality
            work. I highly recommend his services.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col text-center w-[500px] lg:w-[450px] md:w-[380px] h-[300px] flex-shrink-0 p-8    "
          initial={{ x: 200 }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          <div className="text-dark/50 dark:text-light/50">
            <QuoteIcon className="w-12 mb-8" />
          </div>

          <p className="my-4 font-bold max-w-md dark:text-light">
            Moses Ajibade
          </p>
          <p className="mb-4 font-medium max-w-md text-primaryDark">
            Project Manager
          </p>

          <p className="my-4 font-medium max-w-md text-dark/50 dark:text-light/75 md:text-sm">
            Boluwatife Emmanuel's technical expertise and commitment to the
            project made a huge difference. He took our project to the next
            level with his innovative ideas and solutions.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col text-center w-[500px] lg:w-[450px] md:w-[380px] h-[300px] flex-shrink-0 p-8    "
          initial={{ x: 200 }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          <div className="text-dark/50 dark:text-light/50">
            <QuoteIcon className="w-12 mb-8" />
          </div>

          <p className="my-4 font-bold max-w-md dark:text-light">
            Robert Williams
          </p>
          <p className="mb-4 font-medium max-w-md text-primaryDark">CEO</p>

          <p className="my-4 font-medium max-w-md text-dark/50 dark:text-light/75 md:text-sm">
            His ability to navigate complex technical challenges is
            unparalleled. His dedication and passion for the project truly shone
            through in the quality of his work.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col text-center w-[500px] lg:w-[450px] md:w-[380px] h-[300px] flex-shrink-0 p-8    "
          initial={{ x: 200 }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          <div className="text-dark/50 dark:text-light/50">
            <QuoteIcon className="!w-12 mb-8" />
          </div>

          <p className="my-4 font-bold max-w-md dark:text-light">
            Tunde Adetola
          </p>
          <p className="mb-4 font-medium max-w-md text-primaryDark">
            UI/UX Designer
          </p>

          <p className="my-4 font-medium max-w-md text-dark/50 dark:text-light/75 md:text-sm">
            His understanding of user experience principles and his ability to
            apply them to our project was impressive. His contributions
            significantly improved the usability of our product.
          </p>
        </motion.div>
        <motion.div
          style={{ scaleX: scrollXProgress }}
          className="w-full h-[4px] bg-dark dark:bg-light origin-left absolute bottom-[20%] left-0"
        ></motion.div>
      </div>
    </article>
  );
};

export default Testimonials;
