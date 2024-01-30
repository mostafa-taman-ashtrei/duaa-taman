import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
    </>
  );
};

export default Home;
