"use client";

import { useIsVisible } from "@/hooks/use-is-visible";
import { EducationContent } from "@/types/sanity-base";
import { useRef } from "react";

type Props = {
  educationContent: EducationContent;
};

export default function Education({ educationContent }: Props) {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl mb-5">
          {educationContent.header}
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-10">
          {educationContent.summary}
        </p>
        <div className="gap-6">
          {educationContent.educations.map((education) => {
            const ref = useRef<HTMLDivElement>(null);
            const isVisible = useIsVisible(ref);
            return (
              <div
                ref={ref}
                className={`bg-gray-50 px-8 py-10 transition-opacity ease-in duration-200 rounded-md ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                <h4 className="font-medium text-gray-700 text-lg">
                  {education.title}
                </h4>
                <h6 className="font-normal text-gray-500 mb-4">
                  {education.school}, {education.year}
                </h6>
                <p className="font-normal text-gray-500 text-md">
                  {education.description}
                </p>
                {education.link && (
                  <div className="relative mt-4">
                    <a
                      href={education.link}
                      target="_blank"
                      className="font-semibold text-blue-400 text-md relative z-10 cursor-pointer hover:text-blue-500"
                    >
                      Gå til deres hjemmeside
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
