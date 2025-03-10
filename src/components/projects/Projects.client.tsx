"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ProjectsContent } from "@/types/sanity-base";
import { isEqualOrAll } from "@/helpers/helpers";
import imageBuilder from "@sanity/image-url";

type Props = {
  content: ProjectsContent;
  technologies: string[];
  categories: string[];
};

export default function ProjectsClient({
  content,
  technologies,
  categories,
}: Props) {
  const { title, desc, projects } = content;
  const [activeFilter, setActiveFilter] = useState({
    category: "All",
    technology: "All",
  });

  const filteredProjects = projects.filter(
    (project) =>
      isEqualOrAll(project.category, activeFilter.category) &&
      isEqualOrAll(project.technologies, activeFilter.technology)
  );

  return (
    <section id="projects" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {desc}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  activeFilter.category === category ? "default" : "outline"
                }
                onClick={() =>
                  setActiveFilter((prev) => ({ ...prev, category }))
                }
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project._key ?? project.title}
              className="overflow-hidden border border-muted transition-all hover:shadow-md"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies?.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.desc}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
