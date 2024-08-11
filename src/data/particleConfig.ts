import { skills } from "./data.json";

export const getSkillImages = () => {
  const configuredImages = skills.map((skill) => {
    const config = { src: skill.link, width: 20, height: 20 };
    return config;
  });
  return configuredImages;
};
