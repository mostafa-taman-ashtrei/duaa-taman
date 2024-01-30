import About from "./components/About";
import ContactCard from "./components/ContactCard";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <ContactCard />
    </>
  );
};

export default Home;
