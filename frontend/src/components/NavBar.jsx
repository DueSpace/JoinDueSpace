import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Due from "../assets/DueSpace.png";
import { FaBars, FaXmark } from "react-icons/fa6";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent scrolling when full-screen navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close navbar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Prospect", path: "/" },
  ];

  return (
    <>
      {/* Original Main Navigation Header */}
      <header className="mx-auto mt-5 mb-10 flex w-[95%] max-w-2xl items-center justify-between bg-white py-3 pr-3 font-sans relative z-40 md:mb-6 md:h-auto md:max-w-295 md:w-[95%] md:px-0 md:py-5">
        {/* Company logo */}
        <Link to="/">
          <img src={Due} alt="DueSpace Logo" className="w-25" />
        </Link>

        {/* Mobile navigation menu button */}
        <nav className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="cursor-pointer"
          >
            <FaBars className="text-xl" />
          </button>
        </nav>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-[#7C3AED] ${
                location.pathname === link.path
                  ? "text-[#7C3AED]"
                  : "text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://tally.so/r/ODg90k"
            className="rounded-lg bg-[#7C3AED] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6930d6]"
          >
            Start a Project
          </a>
        </nav>
      </header>

      {/* Full-Screen Overlay Navbar with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#FEF7FF] px-6 py-8 font-sans"
          >
            {/* Header inside overlay maintaining exact header layout */}
            <div className="mx-auto flex w-[95%] max-w-2xl items-center justify-between py-3 pr-3">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={Due} alt="DueSpace Logo" className="w-25" />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="cursor-pointer p-1 text-slate-800 hover:text-[#7C3AED] transition-colors"
              >
                <FaXmark className="text-2xl" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="mx-auto my-auto flex w-[95%] max-w-2xl flex-col items-start space-y-6">
              <span className="font-space text-xs font-bold text-[#7C3AED] uppercase tracking-widest">
                Navigation
              </span>
              <ul className="w-full space-y-5">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-3xl md:text-4xl font-bold text-slate-900 hover:text-[#7C3AED] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer inside overlay */}
            <div className="mx-auto flex w-[95%] max-w-2xl items-center justify-between border-t border-slate-200 pt-6 text-sm text-slate-500 font-sans">
              <p>© {new Date().getFullYear()} DueSpace</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#7C3AED] font-medium hover:underline"
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
