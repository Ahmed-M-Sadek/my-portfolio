import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { projects } from "../data/data.json";

const ProjectsCarosel = () => {
  return (
    <Carousel
      opts={{
        align: "end",
        loop: true,
        dragFree: true,
      }}
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem
            key={project.name}
            className="md:basis-1/3 lg:basis-1/5"
          >
            <div className="p-1">
              <Card className="max-h-[27rem]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-semibold">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col aspect-square items-center justify-center">
                  <img src={project.icon} width={150} height={150} />
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center flex flex-col">
                  <CardDescription>
                    <div className="text-center text-gold mb-2 h-16">
                      {project.stack.map((tech, index) => (
                        <span>
                          {project.stack.length > 1 &&
                          index + 1 === project.stack.length
                            ? "& "
                            : ""}
                          {tech}
                          {project.stack.length > 1 &&
                          index + 1 !== project.stack.length
                            ? ", "
                            : ""}
                        </span>
                      ))}
                    </div>
                  </CardDescription>
                  <a href={project.link} className="text-xl text-muted-gold">
                    link
                  </a>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsCarosel;
