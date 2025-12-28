import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Inner container limits width so text doesn't stretch too far */}
      <div className="footer-content">
        
        {/* TOP SECTION: Grid Layout */}
        <div className="footer-grid">
          
          {/* Brand */}
          <div className="footer-section brand-section">
            <span className="footer-logo">
              ML<span className="logo-dot">.</span>MODELS
            </span>
            <p className="footer-text">
              Demystifying machine learning with interactive visualizations.
            </p>
          </div>

          {/* Links */}
          <div className="footer-section links-section">
            <h4 className="footer-heading">Models</h4>
            <ul className="footer-links">
              <li><NavLink to="/linear" onClick={scrollToTop}>Linear Regression</NavLink></li>
              <li><NavLink to="/logistic" onClick={scrollToTop}>Logistic Regression</NavLink></li>
              <li><NavLink to="/knn" onClick={scrollToTop}>K-Nearest Neighbors</NavLink></li>
              <li><NavLink to="/tree" onClick={scrollToTop}>Decision Trees</NavLink></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-section social-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ML Models. All rights reserved.</p>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;