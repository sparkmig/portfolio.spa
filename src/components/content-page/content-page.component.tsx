import * as SanityTypes from "../../types/sanity-base";
import Education from "../education/education.component";
import Hero from "../hero/hero.component";
import Projects from "../projects/projects.component";
import USPList from "../usp-list/usp-list.component";

type Props = {
  contentPage: SanityTypes.ContentPage;
};

export default function ContentPage({ contentPage }: Props) {
  return contentPage.contentSpots?.map((content) => {
    switch (content._type) {
      case "section":
        return (
          <div className="rounded-lg shadow-slate-300 m-5 bg-slate-200 p-20">
            <div className=" w-2/4">
              <h1 className="font-bold text-4xl">{content.header}</h1>
              <p>{content.description}</p>
            </div>
          </div>
        );
      case "hero":
        return <Hero heroContent={content}></Hero>;
      case "uspList":
        return <USPList uspListContent={content}></USPList>;
      case "projects":
        return <Projects></Projects>;
      case "education":
        return <Education></Education>;
      default:
        return <div>unkown content spot</div>;
    }
  });
}
