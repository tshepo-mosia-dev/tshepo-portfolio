import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { portfolio } from "../../data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row">
        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            {portfolio.name}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {portfolio.role}
          </p>
        </div>

        {/* Centre */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`mailto:${portfolio.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <MdEmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;