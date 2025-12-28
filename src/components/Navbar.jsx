import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const finalTheme = savedTheme || (systemDark ? "dark" : "light");
    setTheme(finalTheme);
    document.documentElement.setAttribute("data-theme", finalTheme);
  }, []);

  // 2. Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* LOGO: Icon + Text (Not Clickable) */}
        <div className="navbar-left">
          <div className="brand-logo">
            {/* Neural Network / AI Icon */}
            <svg 
              className="logo-icon" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="6" cy="6" r="2"></circle>
              <circle cx="18" cy="6" r="2"></circle>
              <circle cx="6" cy="18" r="2"></circle>
              <circle cx="18" cy="18" r="2"></circle>
              <line x1="12" y1="12" x2="6" y2="6"></line>
              <line x1="12" y1="12" x2="18" y2="6"></line>
              <line x1="12" y1="12" x2="6" y2="18"></line>
              <line x1="12" y1="12" x2="18" y2="18"></line>
            </svg>
            <span className="brand-text">ML MODELS</span>
          </div>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          
          {/* Home Icon */}
          <li>
            <NavLink to="/" className="nav-link home-icon-link" onClick={() => setIsMenuOpen(false)} aria-label="Home">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </NavLink>
          </li>

          <li><NavLink to="/linear" className="nav-link" onClick={() => setIsMenuOpen(false)}>Linear</NavLink></li>
          <li><NavLink to="/logistic" className="nav-link" onClick={() => setIsMenuOpen(false)}>Logistic</NavLink></li>
          <li><NavLink to="/knn" className="nav-link" onClick={() => setIsMenuOpen(false)}>KNN</NavLink></li>
          <li><NavLink to="/tree" className="nav-link" onClick={() => setIsMenuOpen(false)}>Tree</NavLink></li>
          <li><NavLink to="/random-forest" className="nav-link" onClick={() => setIsMenuOpen(false)}>RF</NavLink></li>
        </ul>

        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;