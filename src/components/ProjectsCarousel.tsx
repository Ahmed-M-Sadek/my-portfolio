import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
// @ts-ignore
import { projects } from "@/data/data.json";
// import Autoplay from "embla-carousel-autoplay";

const ProjectsCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 4000,
        //   }),
        // ]}
      >
        <CarouselContent className="ml-0 flex gap-4">
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
                className="flex-shrink-0 w-full sm:w-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2 items-stretch"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden md:visible" />
        <CarouselNext className="hidden md:visible" />
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
