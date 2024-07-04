import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const SkillCard = ({ skill }: { skill: { name: string; link: string } }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{skill.name}</CardTitle>
        <CardDescription>{skill.link}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{skill.name}</p>
      </CardContent>
      <CardFooter>
        <p>{skill.link}</p>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
