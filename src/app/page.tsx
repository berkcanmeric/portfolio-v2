"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconCode className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <IconBriefcase className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMail className="h-4 w-4" />,
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
