import { SanityDocument } from "@sanity/client"
import exp from "constants";

export type SanityBase<T extends SanityContentTypes> = SanityDocument<Record<string, any>> & {
    _type: T
}

export type SanityContentTypes = 'homePage' | 'contentPage';

export type HomePage = SanityBase<'homePage'> & {
    name: string
}


export type ContentPage = SanityBase<'contentPage'> & {
    contentSpots: Array<ContentSpots>
}

export type ContentSpots =  Section | HeroContent | USPListContent | ProjectsContent | EducationContent;

export type ContentSpotBase<T extends ContentSpotTypes> = {
    _type: T;
    _key: string;
}

export type Section = ContentSpotBase<'section'> & {
    header: string;
    description: string;
}

export type Reference = {
    _ref: string;
    _type: 'reference'
}

export type ContentSpotTypes = 'section' | 'hero' | 'uspList' | 'projects' | 'education';

export type HeroContent = ContentSpotBase<'hero'> & {
    name: string;
    title: string;
    shortDesc: string;
    picture: Reference
    ctas: Array<CTA>
}

export type CTA = {
    text: string;
    action: string
}

export type USPListContent = ContentSpotBase<'uspList'> & {
    usps: Array<USP>;
}

export type USP = {
    title: string;
    shortDesc: string;
    icon: string;
}

export type ProjectsContent = ContentSpotBase<'projects'> & {
    title: string;
    desc: string;
    projects: Array<Project>
}

export type Project = {
    title: string;
    desc: string;
    link?: string;
}

export type EducationContent = ContentSpotBase<'education'> & {
    title: string;
    summary: string;
    //educations: Array<Education>
}

export type Page = ContentPage | HomePage 