import Image from "next/image";
import Navbar from "./components/Navbar";
import profilePic from "../../public/images/profile1.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrowIcon } from "./components/Icons";
import Stats from "./components/Stats";
import ParticlesContainer from "./components/ParticlesContainer";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-dark dark:text-light w-full min-h-screen p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-0 md:pt-16">
      <div className="flex items-center justify-center w-full lg:flex-col">
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center lg:my-8 lg:order-2 z-50">
          <AnimatedText
            text={"Helping Brands To Stand Out In The Digital Era "}
            className="!text-6xl !text-left tracking-wide xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl"
          />
          <p
            className="lg:w-[60%] md:w-[80%] my-4 text-md font-medium text-[#4C5456] dark:text-light/75 tracking-wide md:text-sm"
            style={{ fontFamily: "DM Sans" }}
          >
            As a skilled frontend engineer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects
            showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start mt-2 lg:self-center">
            <Link
              href={"/Boluwatife-Emmanuel-FlowCV-Resume-20240117.pdf"}
              target="_blank"
              className="flex items-center bg-dark dark:bg-light dark:text-dark text-light  p-2 px-6 rounded-lg text-base font-semibold sm:font-medium hover:bg-light
               hover:dark:bg-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light hover:text-dark
                hover:dark:text-light transition-all ease-in-out duration-700
                md:p-1 md:px-4 md:text-base "
              download={false}
            >
              <p>Resume</p>
              <LinkArrowIcon className="!w-6 ml-1" />
            </Link>
            <Link
              href={"https://bolexzy.hashnode.dev/"}
              target="_blank"
              className="ml-4 text-base flex items-center bg-none text-dark dark:text-light p-2 px-6 rounded-lg  font-semibold sm:font-medium hover:bg-dark hover:dark:bg-light border-2 border-solid border-dark dark:border-light hover:border-transparent hover:text-light hover:dark:text-dark  transition-all ease-in-out duration-700 md:p-1 md:px-4 md:text-base"
            >
              Articles
            </Link>
          </div>
        </div>

        {/* particles container */}
        <div className="w-3/5 lg:w-full lg:left-0 h-full left-[40%] absolute top-[10%]  translate-z-0 z-0">
          <ParticlesContainer />
        </div>

        {/* profile avatar */}
        <div className="w-1/2 lg:order-1 md:w-full lg:-mt-10">
          <Image
            src={profilePic}
            alt="boluwatife emmanuel"
            className="w-full h-auto md:w-full"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <Socials />
        </div>
      </div>
      <Stats />
    </main>
  );
}
