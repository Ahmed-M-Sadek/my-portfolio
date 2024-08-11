// @ts-ignore
import { about, personalImage } from "@/data/data.json"; // Assuming this imports your about me paragraph and personal image

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-textPrimaryCustom overflow-hidden relative"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-6">
        {/* Left side: Short description */}
        <div className="text-center lg:text-left max-w-lg lg:mr-auto">
          <h2 className="text-4xl font-bold mb-6 text-highlightCustom">
            About Me
          </h2>
          <p className="text-lg leading-relaxed whitespace-pre-wrap">{about}</p>
        </div>
        {/* Right side: Circular image */}
        <div className="flex-shrink-0 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accentCustom shadow-lg">
          <img
            src={personalImage}
            alt="personal image"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
