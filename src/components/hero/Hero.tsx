import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroContent } from "@/types/sanity-base";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../../sanity-client";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  image: string;
  contactLink: string;
}

type Props = {
  content: HeroContent;
};

export default function Hero({ content }: Props) {
  const {
    name = "Mikkel Gundersen",
    shortDesc = "I've been building web applications for over 5 years.",
    title = "Full-stack Developer",
    picture,
  } = content;

  let pictureUrl = null;
  if (picture) {
    const builder = imageUrlBuilder(sanityClient);
    pictureUrl = builder.image(picture)?.url();
  }

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="container m-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {"Hi, I'm "}
                {name}
              </h1>
              <h2 className="text-xl text-muted-foreground md:text-2xl">
                {title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {shortDesc}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <a href={"#contact"}>
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <a href="#projects">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Projects
                </Button>
              </a>
            </div>
          </div>
          <div className="-order-1 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src={pictureUrl || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
