import * as SanityTypes from "../../types/sanity-base";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

type Props = {
  contentPage: SanityTypes.ContentPage;
};

export default function ContentPage({ contentPage }: Props) {
  return contentPage.contentSpots?.map((content, index) => {
    switch (content._type) {
      case "hero":
        return <Hero content={content}></Hero>;
      case "projects":
        return <Projects content={content}></Projects>;
      case "skills":
        return <Skills content={content}></Skills>;
      case "experience":
        return <Experience content={content}></Experience>;
      case "contact":
        return <Contact content={content}></Contact>;
      default:
        return <div>unkown content spot</div>;
    }
  });
}
