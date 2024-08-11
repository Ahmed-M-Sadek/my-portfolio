import { skills, otherSkills } from "./data.json";

export const getSkillImages = () => {
  const allSkills = skills.concat(otherSkills);
  const configuredImages = allSkills.map((skill) => {
    const config = { name: skill.name, src: skill.link, width: 20, height: 20 };
    return config;
  });
  console.log(configuredImages);
  return { configuredImages };
};

export const getSkillNames = () => {
  const allSkills = skills.concat(otherSkills);
  const names = allSkills.map((skill) => skill.name);
  return names;
};
