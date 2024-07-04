// @ts-ignore
import { Hero, About, Skills, Portfolio, Contact } from "@/components/Sections";

const Home = () => {
  return (
    <div className="flex-grow mt-16 bg-primary">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
