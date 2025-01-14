import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Educations from "@/components/Educations";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Container>
        <About />
        <Stats />
        <Projects />
        <Experiences />
        <Skills />
        <Educations />
        <Blogs />
        <Contact />
      </Container>
    </main>
  );
};

export default HomePage;
