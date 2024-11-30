import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu

  const navigation = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Top 5%",
      link: "/hiring",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } p-4 fixed top-0 w-full transition-colors duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigation?.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.link}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0e8ac8] font-semibold"
                  : `${scrolled ? "text-gray-900" : "text-white"} hover:underline`
              }
            >
              {nav.text}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="hire-now"
            className="bg-[#0e8ac8] text-white px-4 py-2 rounded-lg hover:bg-[#0d7bb8] transition"
          >
            Hire Talent
          </Link>
          <Link
            to="/signup"
            className={`${scrolled ? "text-gray-900" : "text-white"} hover:underline`}
          >
            Log In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className={`${scrolled ? "text-gray-900" : "text-white"} font-light hover:underline md:hidden transition`}
        >
          {menuOpen ? (
            <GrClose className="text-2xl" />
          ) : (
            <HiMiniBars3 className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300`}
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navigation?.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0e8ac8] font-semibold"
                    : "text-gray-900 hover:underline"
                }
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {nav.text}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-2 items-center">
              <Link
                to="hire-now"
                className="bg-[#0e8ac8] text-white px-4 py-2 rounded-lg hover:bg-[#0d7bb8] transition"
                onClick={() => setMenuOpen(false)}
              >
                Hire Talent
              </Link>
              <Link
                to="/signup"
                className="text-gray-900 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
