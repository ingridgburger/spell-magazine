import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/spell-logo-dark.webp";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="logo-row">
        <Link to="/" aria-label="Go to home">
          <img src={logo} alt="SPELL Magazine" className="logo" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      <nav className="nav-bar">
        <div className="nav-links">
          <span className="nav-divider" />
          <NavLink
            to="/read"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link-active" : ""}`
            }
          >
            Read
          </NavLink>
          <span className="nav-divider" />
          <NavLink
            to="/submit"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link-active" : ""}`
            }
          >
            Submit
          </NavLink>
          <span className="nav-divider" />
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link-active" : ""}`
            }
          >
            About
          </NavLink>
          <span className="nav-divider" />
          <NavLink
            to="/support"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link-active" : ""}`
            }
          >
            Support Us
          </NavLink>
          <span className="nav-divider" />
        </div>
      </nav>

      <nav className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <span className="mobile-nav-divider" />
        <NavLink
          to="/read"
          className={({ isActive }) =>
            `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`
          }
          onClick={closeMenu}
        >
          Read
        </NavLink>
        <span className="mobile-nav-divider" />
        <NavLink
          to="/submit"
          className={({ isActive }) =>
            `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`
          }
          onClick={closeMenu}
        >
          Submit
        </NavLink>
        <span className="mobile-nav-divider" />
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`
          }
          onClick={closeMenu}
        >
          About
        </NavLink>
        <span className="mobile-nav-divider" />
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`
          }
          onClick={closeMenu}
        >
          Support Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
