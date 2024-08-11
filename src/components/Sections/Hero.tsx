// @ts-ignore
import { overview, contact } from "@/data/data.json";
import { Button } from "../ui/button";

const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = `mailto:${contact.email}`;
  };

  return (
    <section className=" text-textPrimaryCustom flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Welcome to My Personal Portfolio
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center max-w-2xl">
        {overview}
      </p>
      <Button
        variant="outline"
        onClick={handleButtonClick}
        className="mt-8 bg-highlightCustom text-white hover:bg-opacity-90 transition-all duration-300 ease-in-out"
      >
        Get In Touch
      </Button>
    </section>
  );
};

export default Hero;
