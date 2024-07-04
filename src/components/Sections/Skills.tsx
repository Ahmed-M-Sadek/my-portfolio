import SkillCard from "../SkillCard";
import { skills } from "../../data/data.json";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gold text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill: { name: string; link: string }) => (
            <li key={skill.name}>
              <SkillCard skill={skill} />
            </li>
          ))}
          {/* Add more skills as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
