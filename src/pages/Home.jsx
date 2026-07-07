import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/home-preview.webp";
import teamPhoto from "../assets/images/team-fisheye.png";
import printImage from "../assets/images/to-print.webp";
import SplitContactLayout from "../components/SplitContactLayout";
import "./Home.css";

function Home() {
  useEffect(() => {
    const updateMobileHeroHeight = () => {
      if (window.innerWidth > 650) {
        document.documentElement.style.removeProperty(
          "--home-mobile-chrome-height",
        );
        return;
      }

      const header = document.querySelector(".site-header");
      const banner = document.querySelector(".announcement-banner");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const bannerHeight = banner ? banner.getBoundingClientRect().height : 0;
      const totalOffset = Math.round(headerHeight + bannerHeight);

      document.documentElement.style.setProperty(
        "--home-mobile-chrome-height",
        `${totalOffset}px`,
      );
    };

    updateMobileHeroHeight();

    window.addEventListener("resize", updateMobileHeroHeight);
    window.addEventListener("orientationchange", updateMobileHeroHeight);
    window.visualViewport?.addEventListener("resize", updateMobileHeroHeight);

    return () => {
      window.removeEventListener("resize", updateMobileHeroHeight);
      window.removeEventListener("orientationchange", updateMobileHeroHeight);
      window.visualViewport?.removeEventListener(
        "resize",
        updateMobileHeroHeight,
      );
    };
  }, []);

  return (
    <div>
      <div className="announcement-banner">
        <div className="announcement-track">
          <span className="announcement-text">Welcome to SPELL Magazine</span>
          <span className="announcement-text">
            Check Out Our Latest Edition
          </span>
          <span className="announcement-text">Welcome to SPELL Magazine</span>
          <span className="announcement-text">
            Check Out Our Latest Edition
          </span>
          <span className="announcement-text">Welcome to SPELL Magazine</span>
          <span className="announcement-text">
            Check Out Our Latest Edition
          </span>
        </div>
      </div>

      <section className="hero-section reveal-item">
        <Link to="/read" className="hero-image-link">
          <div className="hero-image-pulse">
            <img
              src={heroImage}
              alt="SPELL Magazine Edition 3 preview"
              className="hero-image"
            />
          </div>
        </Link>
        <p className="text-subheader hero-edition">Edition 3</p>
        <h1 className="text-header hero-title">Fall Winter 2026</h1>

        <div className="hero-buttons">
          <Link to="/read-digitally" className="btn btn-primary">
            Read Digitally
          </Link>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdJQBFUEoO9F1VgkQj24ipuMDvtfLZgmlGmielzsEMi2PALRA/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Order Print
          </a>
        </div>
      </section>

      <section className="about-preview dark-section reveal-item">
        <Link
          to="/about"
          className="about-preview-image-wrapper image-hover-link image-hover-shadow-light"
          aria-label="Learn more about SPELL"
        >
          <img
            src={teamPhoto}
            alt="The SPELL Magazine team"
            className="about-preview-image image-hover-target"
          />
        </Link>

        <div className="about-preview-content">
          <h2 className="text-header">
            What Is <span className="text-header-emphasized">Spell</span>?
          </h2>
          <p className="text-subheader">
            A student-led Philadelphia-based art magazine.
          </p>
          <p className="text-body about-preview-body">
            We are dedicated to giving young artists a platform to publish their
            work where they can be seen and appreciated. Each issue captures a
            season of creativity through art, words, and ideas.
          </p>

          <Link to="/about" className="btn btn-dark">
            More About Us
          </Link>
        </div>
      </section>

      <SplitContactLayout
        imageSrc={printImage}
        imageAlt="SPELL Magazine laptop and print preview"
        imageLinkTo="/support"
        enableImageHover
        imageClassName="home-support-layout-image"
        title={
          <>
            Help Keep Spell{" "}
            <span className="text-header-emphasized">In Print</span>.
          </>
        }
        buttonLabel="Support Our Magazine"
        buttonTo="/support"
      />
    </div>
  );
}

export default Home;
