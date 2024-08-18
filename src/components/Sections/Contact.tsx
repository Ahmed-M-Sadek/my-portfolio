import { Linkedin, Smartphone } from "lucide-react";
// @ts-ignore
import { contact } from "@/data/data.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-secondaryCustom text-textPrimaryCustom"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-6 font-bold text-center text-highlightCustom">
          Contact Me
        </h2>
        <ul className="space-y-4 lg:space-y-0 flex flex-col lg:flex-row justify-evenly align-middle md:items-center">
          <li className="flex items-center">
            <Linkedin className="w-6 h-6 mr-4" />
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center">
            <img
              // src={"assets/contact/github.svg"}
              src="https://cdn.simpleicons.org/github/181717"
              alt={"github logo"}
              className="w-6 h-6 mr-4"
            />
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center">
            <img
              src="https://cdn.simpleicons.org/facebook/0866FF"
              alt={"facebook logo"}
              className="w-6 h-6 mr-4"
            />
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              Facebook
            </a>
          </li>
          <li className="flex items-center">
            <Smartphone className="w-6 h-6 mr-4" />
            <a
              href={`tel:${contact.phone}`}
              className="text-lg hover:underline"
            >
              {contact.phone}
            </a>
          </li>
          <li className="flex items-center">
            <img
              src="https://cdn.simpleicons.org/gmail/EA4335"
              alt={"facebook logo"}
              className="w-6 h-6 mr-4"
            />
            <a
              href={`mailto:${contact.email}`}
              className="text-lg hover:underline sm:text-xs truncate"
            >
              {contact.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
