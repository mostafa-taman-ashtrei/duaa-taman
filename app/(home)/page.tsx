import About from "./components/About";
import ContactCard from "./components/ContactCard";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <ContactCard />
    </>
  );
};

export default Home;
