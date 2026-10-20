import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Due from "../assets/DueSpace.png";
import { FaBars, FaXmark } from "react-icons/fa6";

// Main DueSpace website
const MAIN_SITE = "https://duespace.io";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Original DueSpace navigation
  const navLinks = [
    { name: "Join Our Network", path: "/", external: false },
    {
      name: "Services",
      path: `${MAIN_SITE}/services`,
      external: true,
    },
    {
      name: "Get in Touch",
      path: `${MAIN_SITE}/get-in-touch`,
      external: true,
    },
    {
      name: "Community",
      path: `${MAIN_SITE}/community`,
      external: true,
    },
    {
      name: "Our Story",
      path: `${MAIN_SITE}/our-story`,
      external: true,
    },
  ];

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

<<<<<<< Updated upstream
  const navLinks = [
    { name: "Join Our Network", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Get in Touch", path: "/get-in-touch" },
    { name: "Community", path: "/community" },
    { name: "Our Story", path: "/our-story" },
  ];
=======
  // Reusable navigation link
  const renderNavLink = (link, mobile = false, index = 0) => {
    const isActive =
      !link.external && location.pathname === link.path;

    const className = mobile
      ? "block text-3xl font-bold text-slate-900 transition-colors hover:text-[#7C3AED] md:text-4xl"
      : `whitespace-nowrap text-sm font-semibold transition-colors hover:text-[#7C3AED] ${
          isActive ? "text-[#7C3AED]" : "text-slate-800"
        }`;

    const content = link.external ? (
      <a
        href={link.path}
        className={className}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </a>
    ) : (
      <Link
        to={link.path}
        className={className}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </Link>
    );

    if (!mobile) {
      return <li key={link.name}>{content}</li>;
    }

    return (
      <motion.li
        key={link.name}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1 + index * 0.05,
          duration: 0.3,
        }}
      >
        {content}
      </motion.li>
    );
  };
>>>>>>> Stashed changes

  return (
    <>
      {/* Main navigation header */}
      <header className="relative z-40 mx-auto mt-5 mb-10 flex w-[95%] max-w-2xl items-center justify-between bg-white py-3 pr-3 font-sans md:mb-6 md:h-auto md:w-[95%] md:max-w-[1180px] md:px-0 md:py-5">
        {/* DueSpace logo */}
        <Link to="/" aria-label="DueSpace home">
          <img
            src={Due}
            alt="DueSpace Logo"
            className="w-25"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="cursor-pointer md:hidden"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => renderNavLink(link))}
          </ul>

          <a
            href="https://tally.so/r/ODg90k"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-[#7C3AED] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6930d6]"
          >
            Start a Project
          </a>
        </nav>
      </header>

      {/* Animated mobile navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              duration: 0.4,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#FEF7FF] px-6 py-8 font-sans"
          >
            {/* Overlay header */}
            <div className="mx-auto flex w-[95%] max-w-2xl items-center justify-between py-3 pr-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                aria-label="DueSpace home"
              >
                <img
                  src={Due}
                  alt="DueSpace Logo"
                  className="w-25"
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="cursor-pointer p-1 text-slate-800 transition-colors hover:text-[#7C3AED]"
              >
                <FaXmark className="text-2xl" />
              </button>
            </div>

            {/* Mobile menu links */}
            <div className="mx-auto my-auto flex w-[95%] max-w-2xl flex-col items-start space-y-6">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-[#7C3AED]">
                Navigation
              </span>

              <ul className="w-full space-y-5">
                {navLinks.map((link, index) =>
                  renderNavLink(link, true, index)
                )}
              </ul>

              {/* Mobile Start a Project button */}
              <a
                href="https://tally.so/r/ODg90k"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#6930d6]"
              >
                Start a Project
              </a>
            </div>

            {/* Overlay footer */}
            <div className="mx-auto flex w-[95%] max-w-2xl items-center justify-between border-t border-slate-200 pt-6 font-sans text-sm text-slate-500">
              <p>© {new Date().getFullYear()} DueSpace</p>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="font-medium text-[#7C3AED] hover:underline"
              >
                Close Menu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;