import ProjectsCarosel from "../ProjectsCarousel";
import Timeline from "../Timeline";
// @ts-ignore
import { Separator } from "@/components/ui/separator";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-black text-gold">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-6">Experience</h2>
        <Timeline />
        <Separator />
        <h2 className="text-3xl my-6">Projects</h2>
        <ProjectsCarosel />
      </div>
    </section>
  );
};

export default Portfolio;
