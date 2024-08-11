import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProjectCard = (props: {
  project: {
    name: string;
    description: string;
    stack: [string];
    icon: string;
    link: string;
  };
}) => {
  const project = props.project;
  return (
    <a href={project.link}>
      <Card className="flex flex-col bg-cardBackgroundCustom text-textPrimaryCustom h-full">
        <CardHeader className="py-2 pt-4">
          <CardTitle className="text-center text-lg md:text-xl lg:text-2xl font-semibold text-accentCustom">
            {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-start">
          <img
            src={project.icon}
            alt={project.name}
            className="object-contain max-w-full h-24 md:h-32 lg:h-40"
          />
          <CardDescription className="mt-2 text-base md:sm lg:text-base text-center h-14">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-wrap flex-grow justify-center gap-1">
          {project.stack.map((tech) => (
            <Badge
              key={tech}
              className=" bg-accentCustom justify-center hover:bg-accentCustom"
            >
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
