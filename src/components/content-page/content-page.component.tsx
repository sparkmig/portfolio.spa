import * as SanityTypes from "../../types/sanity-base";

type Props = {
  contentPage: SanityTypes.ContentPage;
};

export default function ContentPage({ contentPage }: Props) {
  return contentPage.contentSpots?.map((content) => {
    switch (content._type) {
      case "section":
        return (
          <div className="rounded-lg shadow-slate-300 m-5 bg-slate-200 p-5">
            <div className=" w-2/4">
              <h1 className="font-bold">{content.header}</h1>
              <p>{content.description}</p>
            </div>
          </div>
        );
      default:
        return <div>unkown content spot</div>;
    }
  });
}
