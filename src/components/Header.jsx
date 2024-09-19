import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// #0e8ac8
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Top 3%",
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
  return (
    <header
      className={`${
        scrolled ? "bg-white" : "bg-transparent"
      } p-4 container mx-auto fixed top-0 transition-colors duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>
        <nav className="flex space-x-6">
          {/* <Link to="/" className="text-[#0e8ac8]">
            Home
          </Link> */}
          {navigation?.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.link}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0e8ac8] heeee"
                  : `${scrolled ? "text-gray-900" : "text-white"}`
              }
            >
              {nav.text}
            </NavLink>
          ))}
          {/* <a
            href="#"
            className={`${scrolled ? "text-gray-900" : "text-white"} `}
          >
            Talent Partner
          </a>
          <a
            href="#"
            className={`${scrolled ? "text-gray-900" : "text-white"} `}
          >
            Active Jobs
          </a>
          <a
            href="#"
            className={`${scrolled ? "text-gray-900" : "text-white"} `}
          >
            Reviews
          </a>
          <a
            href="#"
            className={`${scrolled ? "text-gray-900" : "text-white"} `}
          >
            Events
          </a>
          <a
            href="#"
            className={`${scrolled ? "text-gray-900" : "text-white"} `}
          >
            Blogs
          </a> */}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-[#0e8ac8] text-white px-4 py-2 rounded-lg">
            Start Hiring
          </button>
          <Link to="/signup" className={`${scrolled ? "text-gray-900" : "text-white"}`}>Log In</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
