// @ts-ignore
import { Hero, About, Skills, Portfolio, Contact } from "@/components/Sections";
import Projects from "../components/Sections/Projects";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { getSkillImages } from "../data/particleConfig";

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration for each section
  const HeroParticlesConfig = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "#0c1225" } },
      particles: {
        number: { value: 80, density: { enable: true } },
        color: { value: "#ffffff" },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.5,
          width: 1,
        },
        shape: { type: "circle" },
        move: { enable: true, speed: 2 },
      },
    }),
    []
  );

  const AboutParticlesConfig = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "#0c1225" } },
      particles: {
        number: { value: 80, density: { enable: true } },
        color: { value: "#ffffff" },
        links: { enable: false },
        shape: { type: "circle" },
        move: { enable: true, speed: 2 },
      },
    }),
    []
  );

  const SkillsParticlesConfig = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "#0c1225" } },
      particles: {
        number: { value: 50, density: { enable: true } },
        shape: {
          options: {
            image: getSkillImages(),
          },
          type: "image",
        },
        opacity: {
          value: 0.2,
        },
        size: {
          value: { min: 10, max: 20 },
        },
        move: { enable: true, speed: 3 },
      },
    }),
    []
  );

  const ProjectsParticlesConfig = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "#0c1225" } },
      particles: {
        number: { value: 60, density: { enable: true } },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        shape: {
          options: {
            image: getSkillImages(),
          },
          type: "image",
        },
        opacity: {
          value: 0.2,
        },
        size: {
          value: { min: 10, max: 20 },
        },

        move: { enable: true, speed: 2 },
      },
    }),
    []
  );

  const SectionWithParticles = ({ id, config, children }: any) => (
    <div className="relative">
      {init && (
        <Particles
          id={"tsparticles-" + id}
          options={config}
          className="absolute inset-0 z-0 "
        />
      )}
      <div className="relative z-10 bg-gradient-to-b from-primaryCustom via-transparent via-30% to-primaryCustom">
        {children}
      </div>
    </div>
  );

  return (
    <div className="flex-grow mt-16 w-full bg-primaryCustom">
      <SectionWithParticles id="Hero" config={HeroParticlesConfig}>
        <Hero />
      </SectionWithParticles>
      <SectionWithParticles id="About" config={AboutParticlesConfig}>
        <About />
      </SectionWithParticles>
      <SectionWithParticles id="Skills" config={SkillsParticlesConfig}>
        <Skills />
      </SectionWithParticles>
      <SectionWithParticles id="Portfolio" config={ProjectsParticlesConfig}>
        <Portfolio />
        <Projects />
        <Contact />
      </SectionWithParticles>
    </div>
  );
};

export default Home;
