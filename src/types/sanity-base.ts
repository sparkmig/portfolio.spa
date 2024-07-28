import { SanityDocument } from "@sanity/client"

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


export type ContentSpotTypes = 'section' | 'hero' | 'uspList' | 'projects' | 'education';

export type HeroContent = ContentSpotBase<'hero'> & {

}

export type USPListContent = ContentSpotBase<'uspList'> & {

}

export type ProjectsContent = ContentSpotBase<'projects'> & {

}

export type EducationContent = ContentSpotBase<'education'> & {

}

export type Page = ContentPage | HomePage 