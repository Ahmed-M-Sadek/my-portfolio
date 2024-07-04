import { Link } from "react-scroll";
import { name } from "../data/data.json";

const NavBar = () => {
  const offSet = -30;
  return (
    <nav className="bg-dark-grey text-gold py-4 flex justify-between items-center px-6">
      <div className="text-accent text-2xl font-bold float-left">
        {name.full}
      </div>
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
        Contacts
      </Link>
    </nav>
  );
};

export default NavBar;
