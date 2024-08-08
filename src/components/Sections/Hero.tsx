// @ts-ignore
import { overview, contact } from "@/data/data.json";

const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = `mailto:${contact.email}`;
  };

  return (
    <section className="text-center py-20 bg-black text-white">
      <h1 className="text-4xl mb-4 text-gold">Welcome to My Portfolio</h1>
      <p className="text-xl">{overview}</p>
      {/* Animated button with Tailwind CSS transitions */}
      <button
        onClick={handleButtonClick}
        className="mt-6 px-6 py-2 bg-gold text-black rounded relative overflow-hidden transition duration-300 ease-in-out hover:bg-muted-gold"
      >
        <span className="relative z-10">Get in Touch</span>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-gold opacity-50"></span>
      </button>
    </section>
  );
};

export default Hero;
