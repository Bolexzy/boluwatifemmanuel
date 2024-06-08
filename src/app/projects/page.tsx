import React from "react";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GitHubIcon, LinkArrowIcon } from "../components/Icons";
import FeaturedProject from "../components/FeaturedProject";
import projects from "../data";
import Testimonials from "../components/Testimonials";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  tools: string[];
  github?: string;
}

const page = () => {
  const featuredProjects = projects.map((project) => (
    <FeaturedProject
      key={project.id}
      index={project.id}
      title={project.title}
      description={project.description}
      link={project.link || ""}
      github={project.github || ""}
      image={project.image}
      type="web app"
      tools={project.tools}
    />
  ));

  return (
    <main className="flex w-full min-h-screen mx-auto flex-col items-center justify-center ">
      <section className="w-full pt-16 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ">
        <AnimatedText
          text="Creating next level digital products"
          className="w-full !text-7xl mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl text-center"
        />
        <p className="my-4 text-gray-700  dark:text-gray-400 font-light capitalize text-sm  text-center self-center">
        Few of the projects have worked on. (not updated)
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12  w-full">{featuredProjects}</div>
        </div>
        <div>
          <Testimonials />
        </div>
      </section>
    </main>
  );
};

export default page;
