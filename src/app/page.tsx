import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </>
  );
}
