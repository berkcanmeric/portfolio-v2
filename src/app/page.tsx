"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import { Home as HomeIcon, User, Code, Briefcase, Mail } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Code className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

export default function Home() {
  return (
    <main className="relative bg-black">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
