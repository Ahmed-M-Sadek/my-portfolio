import SkillCard from "../SkillCard";
// @ts-ignore
import { skills, otherSkills } from "@/data/data.json";

const Skills = () => {
  return (
    <section id="skills" className=" text-textSecondaryCustom py-16 px-4">
      <div>
        <h2 className="text-4xl sm:text-base font-bold mb-10 text-center text-highlightCustom">
          Web Development Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill: { name: string; link: string }) => (
            <li key={skill.name}>
              <SkillCard skill={skill} />
            </li>
          ))}
        </ul>
        <h2 className="text-4xl font-bold mt-12 mb-10 text-center text-highlightCustom">
          Other Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {otherSkills.map((skill: { name: string; link: string }) => (
            <li key={skill.name}>
              <SkillCard skill={skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
