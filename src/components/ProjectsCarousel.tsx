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
// @ts-ignore
import { projects } from "@/data/data.json";

const ProjectsCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className="flex gap-4">
          {projects.map(
            (project: {
              name: string;
              description: string;
              stack: [string];
              icon: string;
              link: string;
            }) => (
              <CarouselItem
                key={project.name}
                className="w-full sm:w-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2 flex-shrink-0"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg md:text-xl lg:text-2xl font-semibold">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center">
                    <img
                      src={project.icon}
                      alt={project.name}
                      className="object-contain max-w-full h-24 md:h-32 lg:h-40"
                    />
                    <CardDescription className="mt-2 text-sm md:text-base lg:text-lg text-center">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center mt-auto">
                    <div className="flex flex-col items-center justify-center">
                      <CardDescription className="text-center text-gold mb-2 h-16">
                        {project.stack.map((tech, index) => (
                          <span key={tech}>
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
                      </CardDescription>
                      <a
                        href={project.link}
                        className="text-xl text-muted-gold"
                      >
                        link
                      </a>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
