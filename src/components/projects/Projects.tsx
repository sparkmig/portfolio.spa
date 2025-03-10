import { ProjectsContent } from "@/types/sanity-base";
import ProjectsClient from "./Projects.client";
import imageBuilder from "@sanity/image-url";
import sanityClient from "../../../sanity-client";
export default function Projects({ content }: { content: ProjectsContent }) {
  const categories = [
    "All",
    ...new Set(content.projects.map((project) => project.category)),
  ];
  const technologies = [
    "All",
    ...new Set(content.projects.flatMap((project) => project.technologies)),
  ];
  content.projects.forEach((project) => {
    const builder = imageBuilder(sanityClient);
    project.imageSrc = project.image ? builder.image(project.image).url() : "";
  });
  return (
    <ProjectsClient
      categories={categories}
      technologies={technologies}
      content={content}
    ></ProjectsClient>
  );
}
