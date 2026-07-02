import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";
import "./SplitContactLayout.css";

function SplitContactLayout({
  imageSrc,
  imageAlt,
  imageLinkTo = null,
  enableImageHover = false,
  imageShadowClass = "image-hover-shadow-dark",
  imageClassName = "",
  title,
  bodyContent = null,
  buttonLabel,
  buttonTo,
  buttonHref,
  buttonExternal = false,
  buttonClassName = "btn btn-primary",
  contactTitle = "Let's Connect.",
  contactSubtitle = "Leave your name and email to stay up to date with our magazine!",
}) {
  const image = (
    <img
      src={imageSrc}
      alt={imageAlt}
      className={`split-contact-layout-image ${enableImageHover ? "image-hover-target" : ""} ${imageClassName}`.trim()}
    />
  );

  return (
    <section className="split-contact-layout">
      <div className="split-contact-layout-main reveal-item reveal-fixed-left">
        {imageLinkTo ? (
          <Link
            to={imageLinkTo}
            className={`split-contact-layout-image-link ${enableImageHover ? `image-hover-link ${imageShadowClass}` : ""}`.trim()}
            aria-label={buttonLabel}
          >
            {image}
          </Link>
        ) : (
          <div className="split-contact-layout-image-link">{image}</div>
        )}

        <h2 className="text-header split-contact-layout-title">{title}</h2>

        {bodyContent ? (
          <div className="split-contact-layout-copy">{bodyContent}</div>
        ) : null}

        {buttonExternal ? (
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassName}
          >
            {buttonLabel}
          </a>
        ) : (
          <Link to={buttonTo} className={buttonClassName}>
            {buttonLabel}
          </Link>
        )}
      </div>

      <div className="split-contact-layout-contact reveal-item reveal-fixed-right">
        <h2 className="text-subheader split-contact-layout-contact-title">
          {contactTitle}
        </h2>
        <p className="text-body split-contact-layout-contact-subtitle">
          {contactSubtitle}
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}

export default SplitContactLayout;
