import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { ContactContent } from "@/types/sanity-base";
import Form from "./Form";

type Props = {
  content: ContactContent;
};

export default function Contact({ content }: Props) {
  async function submitAction(payload: any, form: FormData) {
    "use server";
    const age = form.get("age");
    if (age) {
      return { error: "You are a bot" };
    }
    const email = form.get("email");
    const message = form.get("message");
    const name = form.get("name");
    await new Promise((resolve: any) => setTimeout(resolve, 1000));
    console.log({ name, email, message });

    return { message: "Message sent" };
  }

  const { title, description, email, socials } = content;

  const getSocialIcon = (platform: string) => {
    const icons: Record<string, React.ReactNode> = {
      github: <Github className="h-5 w-5" />,
      linkedin: <Linkedin className="h-5 w-5" />,
      twitter: <Twitter className="h-5 w-5" />,
      mail: <Mail className="h-5 w-5" />,
    };

    return icons[platform.toLowerCase()] || <Mail className="h-5 w-5" />;
  };

  return (
    <section
      id="contact"
      className={"w-full py-12 md:py-24" + (true ? "bg-white" : "")}
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Form submitAction={submitAction}></Form>
          <Card className="border border-muted">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                You can also reach me through these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {email}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {getSocialIcon(social.platform)}
                      <span className="ml-2 capitalize">{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-muted-foreground">Remote / Worldwide</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
