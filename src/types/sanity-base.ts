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

type ContentSpots =  Section;

type ContentSpotBase<T extends ContentSpotTypes> = {
    _type: T;
    _key: string;
}

type Section = ContentSpotBase<'section'> & {
    header: string;
    description: string;
}


type ContentSpotTypes = 'section';

export type Page = ContentPage | HomePage; 