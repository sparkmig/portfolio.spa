import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          <nav className="flex gap-4 md:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
