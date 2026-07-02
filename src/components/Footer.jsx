// src/components/Footer.jsx
import instagramLogo from "../assets/images/instagram-logo.png";
import linkedinLogo from "../assets/images/linked-in-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <a href="mailto:spellartmag@gmail.com" className="footer-email">
          spellartmag@gmail.com
        </a>

        <span className="footer-divider" />

        <a
          href="https://www.instagram.com/spellmag"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <img src={instagramLogo} alt="Instagram" className="footer-icon" />
        </a>

        <span className="footer-divider" />

        <a
          href="https://linkedin.com/company/spell-magazine/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
