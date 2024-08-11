// @ts-ignore
import { overview, contact, name } from "@/data/data.json";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = `mailto:${contact.email}`;
  };

  return (
    <section className=" text-textPrimaryCustom flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        {name.full}
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center max-w-2xl whitespace-pre-wrap">
        {overview}
      </p>
      <Button
        variant="outline"
        onClick={handleButtonClick}
        className="mt-8 w-80 h-20 text-3xl bg-highlightCustom hover:bg-accentCustom text-white hover:bg-opacity-90 transition-all duration-300 ease-in-out"
      >
        <Mail className="mr-6 h-9 w-9" />
        Get In Touch
      </Button>
    </section>
  );
};

export default Hero;
