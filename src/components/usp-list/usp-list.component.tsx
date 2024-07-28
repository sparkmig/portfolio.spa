import { USPListContent } from "@/types/sanity-base";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";
import { BsFeather2 } from "react-icons/bs";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaFontAwesome,
  FaQuestion,
  FaQuidditch,
} from "react-icons/fa";

type Props = {
  uspListContent: USPListContent;
};

export default function USPList({ uspListContent }: Props) {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uspListContent.usps &&
            uspListContent.usps.map(async (usp, index) => {
              const Icon = await import("react-icons/fa").then(
                (t) => (t[usp.icon] as IconType) ?? t["FaQuestion"]
              );
              return (
                <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <Icon />
                  </div>
                  <h4 className="font-medium text-gray-700 text-lg mb-4">
                    {usp.title}
                  </h4>
                  <p className="font-normal text-gray-500 text-md  whitespace-break-spaces">
                    {usp.shortDesc}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
