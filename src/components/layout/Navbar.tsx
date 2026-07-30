import { NavLink as RouterNavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto grid h-13 max-w-7xl grid-cols-3 items-center px-6">

        {/* Left */}
        <div className="justify-self-start">
          <RouterNavLink
            to="/"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Tshepo Mosia
          </RouterNavLink>
        </div>

        {/* Center */}
        <ul className="hidden justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <RouterNavLink
                to={link.path}
                className={({ isActive }) =>
                  `group relative pb-1 text-sm font-medium transition-colors ${isActive
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                        }`}
                    />
                  </>
                )}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="justify-self-end">
          <ThemeToggle />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;