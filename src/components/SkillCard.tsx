import { Card, CardContent, CardDescription } from "./ui/card";

const SkillCard = ({ skill }: { skill: { name: string; link: string } }) => {
  return (
    <Card className="flex justify-center items-center bg-cardBackgroundCustom border border-highlightCustom rounded-lg aspect-square w-44 h-44">
      <CardContent className="p-0">
        <div className="flex justify-center w-full h-full">
          <img
            src={skill.link}
            alt={skill.name}
            className="w-20 h-24 object-contain"
          />
        </div>
        <CardDescription className="text-xl text-textPrimaryCustom text-center mt-2">
          {skill.name}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
