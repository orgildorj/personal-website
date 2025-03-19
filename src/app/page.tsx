import { Box } from "@mui/material";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" rowGap={6}>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Languages />

      <Contact />
    </Box>
  );
}
