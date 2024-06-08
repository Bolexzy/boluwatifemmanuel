import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark/50 dark:border-light/50 dark:text-light/75 font-medium text-lg sm:text-base ">
      <div className="py-8  flex lg:flex-col lg:py-6 items-center justify-around">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center  lg:py-2">
          <Link
            href={"/"}
            target="_blank"
            className="underline underline-offset-2 decoration-gray-500"
          >
            Boluwatife Emmanuel
          </Link>{" "}
          <span className="text-pink-800 dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
        </div>
        <Link
          href={"mailto:your-email@gmail.com"}
          target="_blank"
          className="underline underline-offset-2 decoration-gray-500"
        >
          Drop a message
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
