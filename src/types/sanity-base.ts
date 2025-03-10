import { SanityDocument } from "@sanity/client";
import exp from "constants";

export type SanityBase<T extends SanityContentTypes> = SanityDocument<
  Record<string, any>
> & {
  _type: T;
};

export type SanityContentTypes = "homePage" | "contentPage";

export type HomePage = SanityBase<"homePage"> & {
  name: string;
};

export type ContentPage = SanityBase<"contentPage"> & {
  contentSpots: Array<ContentSpots>;
};

export type ContentSpots =
  | HeroContent
  | ProjectsContent
  | SkillsContent
  | ExperienceContent
  | ContactContent;

export type ContentSpotBase<T extends ContentSpotTypes> = {
  _type: T;
  _key: string;
};

export type Reference = {
  _ref: string;
  _type: "reference";
};

export type ContentSpotTypes =
  | "hero"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export type SkillsContent = ContentSpotBase<"skills"> & {
  title: string;
  description: string;
  items: Skill[];
};

export type Skill = {
  name: string;
  icon: string;
  description: string;
};

export type HeroContent = ContentSpotBase<"hero"> & {
  name: string;
  title: string;
  shortDesc: string;
  picture: Reference;
  ctas: Array<CTA>;
};

export type CTA = {
  text: string;
  action: string;
};

export type ProjectsContent = ContentSpotBase<"projects"> & {
  title: string;
  desc: string;
  projects: Array<Project>;
};

export type Project = {
  _key: string;
  imageSrc: string;
  title: string;
  desc: string;
  link?: string;
  liveUrl: string;
  githubUrl: string;
  image: Reference;
  category: string;
  technologies: Array<string>;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

export type ExperienceContent = ContentSpotBase<"experience"> & {
  title: string;
  description: string;
  items: ExperienceItem[];
};

export type Social = {
  platform: string;
  url: string;
};

export type ContactContent = ContentSpotBase<"contact"> & {
  title: string;
  description: string;
  email: string;
  socials: Social[];
};

export type Page = ContentPage | HomePage;
