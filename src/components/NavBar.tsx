import { Link } from "react-scroll";
// @ts-ignore
import { name } from "@/data/data.json";

const NavBar = () => {
  const offSet = 0;

  return (
    <nav className="bg-dark-grey text-gold py-4 px-6 flex justify-between items-center">
      <div className="text-accent text-2xl font-bold">{name.full}</div>
      <div className="flex space-x-14 mr-10 text-xl">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={offSet}
          className="text-white hover:text-muted-gold cursor-pointer"
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={offSet}
          className="text-white hover:text-muted-gold cursor-pointer"
        >
          Skills
        </Link>

        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={offSet}
          className="text-white hover:text-muted-gold cursor-pointer"
        >
          Portfolio
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={offSet}
          className="text-white hover:text-muted-gold cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
