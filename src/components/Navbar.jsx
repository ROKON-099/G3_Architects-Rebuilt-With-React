import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        className="hover:text-orange-500 transition duration-200"
      >
        Home
      </NavLink> 

      <NavLink
        to="/about"
        onClick={() => setIsOpen(false)}
        className="hover:text-orange-500 transition duration-200"
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        onClick={() => setIsOpen(false)}
        className="hover:text-orange-500 transition duration-200"
      >
        Contact
      </NavLink>

      <NavLink
        to="/login"
        onClick={() => setIsOpen(false)}
        className="hover:text-orange-500 transition duration-200"
      >
        Login
      </NavLink>
    </>
  );

  return (
    <header className="bg-orange-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar */}
        <div className="flex max-w-5xl mx-auto items-center justify-between py-5">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl sm:text-xl font-bold text-black"
          >
            G3-Architects
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
            {navLinks}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col items-center gap-4 text-gray-700 font-medium">
              {navLinks}
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;