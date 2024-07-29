"use client";

import { useIsVisible } from "@/hooks/use-is-visible";
import { ProjectsContent } from "@/types/sanity-base";
import { DetailedHTMLProps, HTMLAttributes, useRef } from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

type Props = {
  projectsContents: ProjectsContent;
};

export default function Projects({ projectsContents }: Props) {
  return (
    <section className="py-10 md:py-16" id={projectsContents._key}>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl mb-5">
              {projectsContents.title}
            </h1>
            <p className="font-normal text-gray-500 text-xs md:text-base">
              {projectsContents.desc}
            </p>
          </div>
          <div className="space-y-6 lg:w-5/12">
            {projectsContents.projects &&
              projectsContents.projects.map((project, index) => {
                const ref = useRef<HTMLDivElement>(null);
                const isVisible = useIsVisible(ref);
                console.log(isVisible);
                return (
                  <div
                    ref={ref}
                    key={index}
                    className={`flex space-x-6 transition-opacity ease-in duration-500 bg-gray-50 px-8 py-10 rounded-md lg:w-auto ${isVisible ? "opacity-100" : "opacity-0"}`}
                  >
                    <div>
                      <h1 className="font-semibold text-gray-700 text-xl md:text-2xl mb-5">
                        {project.title}
                      </h1>
                      <p
                        className={
                          "font-normal text-gray-500 whitespace-break-spaces " +
                            project.link && "mb-5"
                        }
                      >
                        {project.desc}
                      </p>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          className="text-blue-400 hover:underline cursor-pointer flex items-center"
                        >
                          Gå til projekt
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
