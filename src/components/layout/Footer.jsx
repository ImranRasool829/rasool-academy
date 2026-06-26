import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

import {
  quickLinks,
  learningPaths,
  resources,
  socialLinks,
} from "../../data/footerLinks";

const iconMap = {
  YouTube: FaYoutube,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">
      <div className="section-container py-16">

        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <div className="bg-purple-600 p-3 rounded-xl">
                <FaCode className="text-white text-2xl" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  Rasool Academy
                </h2>

                <p className="text-purple-400 text-sm">
                  Learn • Build • Grow
                </p>
              </div>

            </div>

            <p className="text-slate-400 mt-6 leading-7">
              Learn modern programming with structured courses,
              practical projects and real-world developer roadmaps.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              {socialLinks.map((social) => {

                const Icon = iconMap[social.name];

                return (

                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-slate-900
                      hover:bg-purple-600
                      transition
                      duration-300
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon className="text-white text-lg" />
                  </a>

                );

              })}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-purple-400 transition"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Learning */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Learning Paths
            </h3>

            <ul className="space-y-4">

              {learningPaths.map((item) => (

                <li
                  key={item}
                  className="text-slate-400 hover:text-purple-400 transition cursor-pointer"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Resources
            </h3>

            <ul className="space-y-4">

              {resources.map((item) => (

                <li
                  key={item}
                  className="text-slate-400 hover:text-purple-400 transition cursor-pointer"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Rasool Academy. All rights reserved.
            </p>

            <p className="text-slate-500 text-sm">
              Built with ❤️ by Emran Rasool
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;