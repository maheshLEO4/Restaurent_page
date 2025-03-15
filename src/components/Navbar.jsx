import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "reservation", label: "Reservation" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" }
  ];

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo/Title */}
        <h1 className={`text-xl sm:text-2xl font-bold tracking-wide transition-colors duration-300 ${
          scrolled ? "text-orange-600" : "text-white"
        }`}>
          Aroma Restaurant
        </h1>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-2 lg:space-x-8 text-sm lg:text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              activeClass="text-orange-500 font-semibold"
              className={`cursor-pointer px-3 py-2 transition-colors duration-300 hover:text-orange-500 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-orange-300 rounded p-1"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className={`w-6 h-6 ${scrolled ? "text-orange-600" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className={`w-6 h-6 ${scrolled ? "text-orange-600" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? "max-h-96 opacity-100 shadow-lg" 
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-4 pt-2 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="block py-2 px-3 text-gray-800 hover:bg-orange-100 hover:text-orange-700 rounded-md transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}