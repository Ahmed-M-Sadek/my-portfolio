import { Linkedin, Github, Facebook, Phone, Mail } from "lucide-react";
import { contact } from "../../data/data.json";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted-gold text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-6">Contact</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Linkedin className="w-6 h-6 mr-4" />
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-dark-grey hover:underline"
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
              className="text-lg text-dark-grey hover:underline"
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
              className="text-lg text-dark-grey hover:underline"
            >
              Facebook
            </a>
          </li>
          <li className="flex items-center">
            <Phone className="w-6 h-6 mr-4" />
            <span className="text-lg text-dark-grey">{contact.phone}</span>
          </li>
          <li className="flex items-center">
            <Mail className="w-6 h-6 mr-4" />
            <a
              href={`mailto:${contact.email}`}
              className="text-lg text-dark-grey hover:underline"
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
