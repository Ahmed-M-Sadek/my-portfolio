import { Linkedin, Github, Facebook, Phone, Mail } from "lucide-react";
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
        <ul className="space-y-4 flex flex-col sm:flex-row justify-evenly items-center">
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
            <Github className="w-6 h-6 mr-4" />
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
            <Facebook className="w-6 h-6 mr-4" />
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
            <Phone className="w-6 h-6 mr-4" />
            <a
              href={`tel:${contact.phone}`}
              className="text-lg hover:underline"
            >
              {contact.phone}
            </a>
          </li>
          <li className="flex items-center">
            <Mail className="w-6 h-6 mr-4" />
            <a
              href={`mailto:${contact.email}`}
              className="text-lg hover:underline"
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
