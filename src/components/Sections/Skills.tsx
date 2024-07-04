import SkillCard from "../SkillCard";
import { skills, otherSkills } from "../../data/data.json";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gold text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Web Development Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill: { name: string; link: string }) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ul>
        <h2 className="text-4xl font-bold mt-12 mb-10 text-center">
          Other Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {otherSkills.map((skill: { name: string; link: string }) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
