"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { ContactContent } from "@/types/sanity-base";

type Props = {
  content: ContactContent;
};

export default function Contact({ content }: Props) {
  const { title, description, email, socials } = content;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message (in a real app)
    alert("Message sent! I'll get back to you soon.");
  };

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
          <Card className="border border-muted">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and Ill get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

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
