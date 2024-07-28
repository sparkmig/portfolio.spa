import { HeroContent } from "@/types/sanity-base";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../../sanity-client";

type Props = {
  heroContent: HeroContent;
};

export default function Hero({ heroContent }: Props) {
  let pictureUrl = null;

  if (heroContent.picture) {
    const builder = imageUrlBuilder(sanityClient);
    pictureUrl = builder.image(heroContent.picture)?.url();
  }

  return (
    <section className="py-10 md:py-16" id={heroContent.title}>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          {pictureUrl && (
            <div className="flex justify-center mb-16 ">
              <Image
                className="rounded-full aspect-square object-cover"
                priority={false}
                loading="lazy"
                width={250}
                height={250}
                src={pictureUrl}
                alt=""
              ></Image>
            </div>
          )}
          {heroContent.name && (
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl mb-8">
              {heroContent.name}
            </h6>
          )}
          <h1 className="font-bold text-gray-900 text-4xl md:text-5xl leading-none mb-8">
            {heroContent.title}
          </h1>
          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            {heroContent.shortDesc}
          </p>
          <div className="space-x-2">
            {heroContent.ctas &&
              heroContent.ctas.map((cta, index) => (
                <a
                  key={index}
                  href={cta.action}
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-50"
                >
                  {cta.text}
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
