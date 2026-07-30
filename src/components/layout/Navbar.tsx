import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "../../data/navLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <RouterNavLink
          to="/"
          className="flex-1 text-lg font-bold tracking-tight text-foreground"
        >
          Tshepo Mosia
        </RouterNavLink>

        {/* Desktop Navigation */}
        <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <RouterNavLink
                to={link.path}
                className={({ isActive }) =>
                  `
    relative rounded-sm pb-1 text-sm font-medium transition-colors

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background

    after:absolute
    after:bottom-0
    after:left-0
    after:h-0.5
    after:rounded-full
    after:bg-primary
    after:transition-all
    after:duration-300

    ${isActive
                    ? "text-foreground after:w-full"
                    : "text-muted after:w-0 hover:text-foreground hover:after:w-full"
                  }
  `
                }
              >
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg p-2 transition hover:bg-surface md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <RouterNavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-sm transition ${isActive
                        ? "text-primary"
                        : "text-foreground hover:bg-surface"
                      }`
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;