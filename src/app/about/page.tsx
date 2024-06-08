import React from "react";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import framePic from "../../../public/images/about_img.png";
import { url } from "inspector";
import {
  DotIcon,
  GlobeIcon,
  OneIcon,
  ThreeIcon,
  TwoIcon,
} from "../components/Icons";
import CustomSkill from "../components/CustomSkill";
import lightBulb from "../../../public/images/light-bulb-svgrepo-com.svg";
import AnimatedFrame from "../components/AnimatedFrame";

const page = () => {
  return (
    <main className="flex w-full min-h-screen mx-auto flex-col items-center justify-center">
      <section className="w-full flex flex-col gap-8 pt-16 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8">
        <AnimatedText
          text="Helping brands thrive in the digital world"
          className="!text-6xl lg:!text-6xl sm:!text-3xl md:!text-4xl  mb-16 sm:mb-0 text-center"
        />
        {/* biography and proifle pic */}
        <div className="grid grid-cols-8 gap-16 md:gap-0">
          <div className="col-span-4 w-full  text-lg  sm:text-sm md:col-span-8 md:mt-5 flex flex-col items-start md:items-center justify-start md:order-2 text-[#4C5456] dark:text-light/75">
            <p className="my-4 text-dark max-w-lg dark:text-light font-bold capitalize text-3xl lg:text-2xl sm:text-xl text-left self-start">
              Boluwatife Emmanuel
            </p>
            <p className="my-2 font-medium max-w-lg">
              Highly Skilled and experienced frontend developer, having a deep
              understanding of software development principles and best
              practices, I am dedicated to turning ideas into innovative web
              applications.
            </p>
            <p className="my-2 font-medium max-w-lg">
              I help companies from all over the world with tailor-made
              solutions. With each project, I push my work to new horizons,
              always putting quality first.
            </p>
            <p className="text-[#868989] my-4">Always Exploring...</p>

            <div className="w-36  h-36 relative my-4 rounded-full bg-none border-none outline outline-4 shadow-2xl outline-offset-2  outline-white dark:outline-light dark:shadow-light border-2 shadow-dark shadow-5xl flex items-center justify-center overflow-hidden">
              <div className="text-gray-900 dark:text-gray-900 dark:bg-white p-8 overflow-hidden hover:scale-110 transition-all ease-in-out duration-300">
                <GlobeIcon className="!w-[550px]" />
              </div>
            </div>
          </div>
          <div
            className="col-span-4 md:col-span-8 w-full  sm:mt-8 flex items-center justify-center h-max  md:order-1"
            style={{
              borderImage:
                " linear-gradient(258deg, #0D4949 -47.68%, rgba(170, 194, 194, 0.75) 17.82%, rgba(146, 201, 201, 0.00) 90.18%, rgba(13, 73, 73, 0.00) 132.63%))",
            }}
          >
            {/* <div className="w-full md:w-[80%]  h-auto border-4 border-dark/50 dark:border-light/50 p-1 bg-gray-200 rounded-2xl shadow-2xl shadow-dark dark:shadow-light">
              <Image
                src={profilePic}
                alt="man sitting"
                className="w-full h-auto rounded-xl"
              ></Image>
            </div> */}
            <AnimatedFrame framePic={framePic} />
          </div>
        </div>

        {/* what i can do for you  */}
        <div
          className="flex flex-col gap-8 justify-center 
          w-full sm:w-[90%] mx-auto h-screen relative sm:h-full sm:mt-8
        "
        >
          <div>
            <h2 className="text-dark dark:text-light font-bold capitalize text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-left">
              I can help you with ...
            </h2>
          </div>
          <div className="grid w-full grid-cols-12 gap-8 md:gap-1 my-8 z-50">
            <div
              className="col-span-4 sm:col-span-12 flex flex-col items-start justify-center
             text-left gap-5 px-4 py-8 hover:bg-white dark:hover:bg-black/25 transition-all ease-in-out duration-700
            "
            >
              <div className="text-[#B3BBAE] hover:text-primary transition-all ease-in-out duration-300">
                <OneIcon className="w-16" />
              </div>

              <p className="text-xl my-2 text-dark dark:text-light text-center font-bold capitalize  ">
                🎨 Design
              </p>
              <p className="my-4 text-dark/75 dark:text-light/75 sm:text-sm">
                With a solid track record in designing websites and apps, I
                deliver strong and user-friendly digital designs. Solid company
                branding is the foundation of any succesful website.
              </p>
            </div>
            <div
              className="col-span-4 sm:col-span-12 flex flex-col items-start justify-center
             text-left gap-5 px-4 py-8 hover:bg-white dark:hover:bg-black/25 transition-all ease-in-out duration-700
            "
            >
              <div className="text-[#B3BBAE] hover:text-primary transition-all ease-in-out duration-300">
                <TwoIcon className="w-16" />
              </div>

              <p className="text-xl my-2 text-dark dark:text-light text-center font-bold capitalize  ">
                🖥️ Development
              </p>
              <p className="my-4 text-dark/75 dark:text-light/75 sm:text-sm">
                I build scalable websites from scratch that fit seamlessly with
                design. My focus is on micro animations, transitions and
                interaction. For content management I use Kirby CMS.
              </p>
            </div>
            <div
              className="col-span-4 sm:col-span-12 flex flex-col items-start justify-center
             text-left gap-5 px-4 py-8 hover:bg-white dark:hover:bg-black/25 transition-all ease-in-out duration-700
            "
            >
              <div className="text-[#B3BBAE] hover:text-primary transition-all ease-in-out duration-300">
                <ThreeIcon className="w-16" />
              </div>

              <p className="text-xl my-2 text-dark dark:text-light text-left font-bold capitalize  ">
                ✨ The full package
              </p>
              <p className="my-4  text-dark/75 dark:text-light/75 sm:text-sm">
                A complete website from concept to implementation, that's what
                makes me stand out. My great sense for design and my development
                skills enable me to create kick-ass projects.
              </p>
            </div>
          </div>
          <div className="absolute right-8 bottom-8 lg:top-[72%] md:bottom-32 sm:-bottom-24 inline-block 2xl:w-32 xl:w-32 !w-14 lg:w-28">
            <Image
              src={lightBulb}
              alt="lightbulb"
              className="w-full h-auto"
            ></Image>
          </div>
        </div>

        {/* my skills  */}
        <div className="flex flex-col lg:gap-8 justify-center">
          <div>
            <h2 className="text-dark dark:text-light font-bold capitalize text-4xl lg:text-3xl md:text-3xl sm:text-xl  text-center w-full">
              Skills
            </h2>
          </div>
          <div className="w-full h-screen lg:h-full relative">
            <CustomSkill />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
