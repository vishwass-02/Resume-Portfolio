import { Navbar } from "./components/global/Navbar";
import { Footer } from "./components/global/Footer";
import { CustomCursor } from "./components/global/CustomCursor";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Education } from "./components/sections/Education";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <div className="flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
