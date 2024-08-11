import ProjectsCarousel from "../ProjectsCarousel";
// @ts-ignore
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  return (
    <section id="projects" className="py-20  text-textPrimaryCustom">
      <div className="container mx-auto px-6 overflow-visible">
        <section id="projects">
          <h2 className="text-3xl my-6 text-highlightCustom">Projects</h2>
          <ProjectsCarousel />
        </section>
      </div>
    </section>
  );
};

export default Projects;
