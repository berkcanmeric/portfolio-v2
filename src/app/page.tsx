"use client";

import { useEffect } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import { SectionDivider } from "@/components/ui/section-divider";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
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
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-black">
      <CursorSpotlight />
      <FloatingNav navItems={navItems} />
      <Hero />
      <SectionDivider color="violet" />
      <About />
      <SectionDivider color="purple" />
      <Projects />
      <SectionDivider color="violet" />
      <Experience />
      <SectionDivider color="violet" />
      <Contact />
      {/* No divider here — Footer has its own gradient line */}
      <Footer />
    </main>
  );
}
