import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExperienceContent } from "@/types/sanity-base";

type Props = {
  content: ExperienceContent;
};

export default function Experience({ content }: Props) {
  const { items, description, title } = content;

  return (
    <section id="experience" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="m-auto container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start md:justify-center"
            >
              <div className="absolute left-0 md:left-1/2 ml-2.5 md:-ml-2.5 h-5 w-5 rounded-full border bg-background"></div>

              <Card
                className={`w-full md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"} border border-muted`}
              >
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">{item.company}</span> •{" "}
                      {item.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
