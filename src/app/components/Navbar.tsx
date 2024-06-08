"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CustomLink = ({
  title,
  href,
  classname = "",
}: {
  title: string;
  href: string;
  classname: string;
}) => {
  const pathname = usePathname();
  //   console.log(`${pathname}: ${href}} = ${pathname === href}`);

  return (
    <Link href={href} className={`${classname} relative group`}>
      {title}
      <span
        className={`h-[1.5px]  inline-block  bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-700 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  title,
  href,
  classname = "",
  toggle,
}: {
  title: string;
  href: string;
  classname: string;
  toggle: () => void;
}) => {
  const pathname = usePathname();
  //   console.log(`${pathname}: ${href}} = ${pathname === href}`);
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${classname} relative group text-light dark:text-dark my-5`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1.5px]  inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-700 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 xl:px-24  lg:px-16 md:px-12 sm:px-8 py-8 font-medium flex items-center justify-between dark:text-light relative">
      <button
        className="flex-col p-1 !justify-center !items-center hidden lg:flex lg:z-50 cursor-pointer"
        onClick={() => handleClick()}
      >
        <span
          className={`transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm   ${
            isOpen
              ? "rotate-45 translate-y-1 bg-light dark:bg-dark"
              : "-translate-y-0.5 bg-dark dark:bg-light"
          }`}
        ></span>
        <span
          className={`${
            isOpen ? "opacity-0" : "opacity-100"
          } bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5`}
        ></span>
        <span
          className={` transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm 
        ${
          isOpen
            ? "-rotate-45 -translate-y-1 bg-light dark:bg-dark"
            : "translate-y-0.5 bg-dark dark:bg-light"
        }`}
        ></span>
      </button>

      {/* desktop menu links */}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="">
          <Link href={"/#"} className="text-3xl font-bold">
            Boluwatife Emmanuel
          </Link>
        </nav>

        <nav className="flex items-center z-40">
          <CustomLink title={"Home"} href={"/"} classname={"mr-4"} />
          <CustomLink title={"About"} href={"/about"} classname={"mx-4"} />
          <CustomLink
            title={"Projects"}
            href={"/projects"}
            classname={"mx-4"}
          />
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            } ml-3 rounded-full p-1`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* mobile menu links */}
      {isOpen ? (
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
          className="min-w--[70vw] sm:w-full h-screen flex flex-col justify-center items-center gap-4 fixed top-0 left-0 bg-dark/90 dark:bg-light/75 backdrop-blur-md p-32 md:p-16 z-10"
        >
          <motion.nav
            className=""
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 1, type: "spring", bounce: 0.1 }}
          >
            <Link
              href={"/#"}
              className="w-full text-3xl sm:text-xl font-bold text-light dark:text-dark"
            >
              Boluwatife Emmanuel
            </Link>
          </motion.nav>

          <nav className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 2, type: "spring", bounce: 0.1 }}
            >
              <CustomMobileLink
                title={"Home"}
                href={"/"}
                classname={""}
                toggle={handleClick}
              />
            </motion.div>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 2.5, type: "spring", bounce: 0.1 }}
            >
              <CustomMobileLink
                title={"About"}
                href={"/about"}
                classname={""}
                toggle={handleClick}
              />
            </motion.div>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 3, type: "spring", bounce: 0.1 }}
            >
              <CustomMobileLink
                title={"Projects"}
                href={"/projects"}
                classname={""}
                toggle={handleClick}
              />
            </motion.div>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              } ml-3 rounded-full p-1`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* <div className="absolute left-[50%] top-10 translate-x-[50%] animate-pulse z-50">
        <Logo />
      </div> */}
      <div className="w-auto absolute inset-0 top-8 flex items-center justify-center animate-pulse z-30">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
