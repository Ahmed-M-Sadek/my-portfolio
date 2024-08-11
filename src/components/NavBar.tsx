import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-scroll";
// @ts-ignore
import { name } from "@/data/data.json";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const offSet = 0;

  return (
    <nav className="bg-primaryCustom text-textPrimaryCustom py-4 px-6 flex justify-between items-center fixed z-30 w-full top-0">
      <div className="text-accentCustom text-2xl font-bold">{name.short}</div>

      {/* Large screen navigation */}
      <div className="hidden md:flex space-x-14 mr-10 text-xl">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={offSet}
          className="hover:text-highlightCustom cursor-pointer"
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={offSet}
          className="hover:text-highlightCustom cursor-pointer"
        >
          Skills
        </Link>

        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={offSet}
          className="hover:text-highlightCustom cursor-pointer"
        >
          Portfolio
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={offSet}
          className="hover:text-highlightCustom cursor-pointer"
        >
          Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={offSet}
          className="hover:text-highlightCustom cursor-pointer"
        >
          Contact
        </Link>
      </div>

      {/* Burger menu for small screens */}
      <div className="md:hidden ">
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-textPrimaryCustom focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
        {menuOpen && (
          <div className="absolute right-4 top-16 bg-secondaryCustom shadow-lg rounded-lg w-48 z-50">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={offSet}
              className="block px-4 py-2 text-lg hover:bg-highlightCustom hover:text-textPrimaryCustom cursor-pointer rounded-t-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={offSet}
              className="block px-4 py-2 text-lg hover:bg-highlightCustom hover:text-textPrimaryCustom cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={offSet}
              className="block px-4 py-2 text-lg hover:bg-highlightCustom hover:text-textPrimaryCustom cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={offSet}
              className="block px-4 py-2 text-lg hover:bg-highlightCustom hover:text-textPrimaryCustom cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={offSet}
              className="block px-4 py-2 text-lg hover:bg-highlightCustom hover:text-textPrimaryCustom cursor-pointer rounded-b-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
