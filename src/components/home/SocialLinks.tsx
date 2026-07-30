import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { portfolio } from "../../data/portfolio";

const SocialLinks = () => {
    const links = [
        {
            href: portfolio.github,
            icon: FaGithub,
            label: "GitHub",
        },
        {
            href: portfolio.linkedin,
            icon: FaLinkedin,
            label: "LinkedIn",
        },
        {
            href: `mailto:${portfolio.email}`,
            icon: MdEmail,
            label: "Email",
        },
    ];

    return (
        <div className="flex items-center gap-4">
            {links.map(({ href, icon: Icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
                >
                    <Icon size={22} />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;