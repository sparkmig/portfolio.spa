import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
  Terminal,
  Figma,
} from "lucide-react";
import { SkillsContent } from "@/types/sanity-base";

type Props = {
  content: SkillsContent;
};

export default function Skills({ content }: Props) {
  const { items, description, title } = content;
  // Default skills if none are provided

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      code: <Code className="h-10 w-10" />,
      server: <Server className="h-10 w-10" />,
      database: <Database className="h-10 w-10" />,
      palette: <Palette className="h-10 w-10" />,
      smartphone: <Smartphone className="h-10 w-10" />,
      terminal: <Terminal className="h-10 w-10" />,
      globe: <Globe className="h-10 w-10" />,
      figma: <Figma className="h-10 w-10" />,
    };

    return icons[iconName] || <Code className="h-10 w-10" />;
  };

  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((skill, index) => (
            <Card key={index} className="border border-muted">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
