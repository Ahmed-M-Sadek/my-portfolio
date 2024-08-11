import Timeline from "../Timeline";
// @ts-ignore
import { Separator } from "@/components/ui/separator";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 text-textPrimaryCustom">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-6 text-highlightCustom">Experience</h2>
        <Timeline />
      </div>
    </section>
  );
};

export default Portfolio;
