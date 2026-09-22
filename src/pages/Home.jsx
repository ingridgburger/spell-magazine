import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/e4-cover.webp";
import teamPhoto from "../assets/images/team-fisheye.png";
import printImage from "../assets/images/to-print.webp";
import SplitContactLayout from "../components/SplitContactLayout";
import "./Home.css";

const mockupImages = import.meta.glob("../assets/images/mockup-*.webp", {
  eager: true,
  import: "default",
});
const magazineSpreads = Array.from({ length: 10 }, (_, index) =>
  mockupImages[`../assets/images/mockup-${index + 1}.webp`],
);

function Home() {
  useEffect(() => {
    const updateHeroViewportHeight = () => {
      const header = document.querySelector(".site-header");
      const banner = document.querySelector(".announcement-banner");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const bannerHeight = banner ? banner.getBoundingClientRect().height : 0;
      const totalOffset = Math.round(headerHeight + bannerHeight);

      if (window.innerWidth > 650) {
        document.documentElement.style.removeProperty(
          "--home-mobile-chrome-height",
        );
        document.documentElement.style.setProperty(
          "--home-desktop-chrome-height",
          `${totalOffset}px`,
        );
        return;
      }

      document.documentElement.style.setProperty(
        "--home-mobile-chrome-height",
        `${totalOffset}px`,
      );
      document.documentElement.style.removeProperty(
        "--home-desktop-chrome-height",
      );
    };

    updateHeroViewportHeight();

    const header = document.querySelector(".site-header");
    const banner = document.querySelector(".announcement-banner");
    const resizeObserver = new ResizeObserver(updateHeroViewportHeight);

    if (header) {
      resizeObserver.observe(header);
    }

    if (banner) {
      resizeObserver.observe(banner);
    }

    window.addEventListener("resize", updateHeroViewportHeight);
    window.addEventListener("orientationchange", updateHeroViewportHeight);
    window.visualViewport?.addEventListener("resize", updateHeroViewportHeight);

    return () => {
      window.removeEventListener("resize", updateHeroViewportHeight);
      window.removeEventListener("orientationchange", updateHeroViewportHeight);
      window.visualViewport?.removeEventListener(
        "resize",
        updateHeroViewportHeight,
      );
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="announcement-banner">
        <div className="announcement-track">
          <span className="announcement-text">Welcome to SPELL Magazine</span>
          <span className="announcement-text">
            Spring/Summer 2026 Out Now
          </span>
          <span className="announcement-text">Welcome to SPELL Magazine</span>
          <span className="announcement-text">
            Spring/Summer 2026 Out Now
          </span>
          <span className="announcement-text">Welcome to SPELL Magazine</span>
          <span className="announcement-text">
            Spring/Summer 2026 Out Now
          </span>
        </div>
      </div>

      <section className="hero-section" aria-labelledby="home-edition-title">
        <div className="hero-edition-content">
          <Link to="/read/spring-summer-2026" className="hero-image-link">
            <img
              src={heroImage}
              alt="SPELL Magazine Edition 4 cover"
              className="hero-image"
              fetchPriority="high"
            />
          </Link>
          <h1 id="home-edition-title" className="text-header hero-title">
            Spring Summer 2026
          </h1>

          <div className="hero-buttons">
            <Link to="/read/spring-summer-2026" className="btn btn-primary">
              Read Digitally
            </Link>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7ZiluwR_d7dZFz19SUkkUs9QzY908b4KulViDGGIuNFwx9A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Order Print
            </a>
          </div>
        </div>

        <div
          className="hero-spreads"
          role="region"
          aria-label="Inside SPELL Magazine Edition 4"
        >
          <div className="hero-spreads-viewport">
            <div className="hero-spreads-track">
              {[0, 1].map((copy) => (
                <div
                  className="hero-spreads-group"
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {magazineSpreads.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={copy === 0 ? `Edition 4 magazine spread ${index + 1}` : ""}
                      width="1000"
                      height="650"
                      className="hero-spread-image"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
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
