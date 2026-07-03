import { Link, Navigate, useParams } from "react-router-dom";
import { editions } from "../data/editions";
import "./ReadEdition.css";

function ReadEdition() {
  const { editionId } = useParams();
  const edition = editions.find((item) => item.id === editionId);

  if (!edition) {
    return <Navigate to="/read" replace />;
  }

  return (
    <div className="read-edition-page">
      <div className="read-edition-top-row reveal-item">
        <Link to="/read" className="read-edition-back-link">
          <span className="read-edition-back-arrow">←</span>
          <span>BACK</span>
        </Link>

        <h1 className="text-header read-edition-title">{edition.title}</h1>
      </div>

      <div className="read-edition-actions reveal-item">
        <a
          href={edition.openInNewTabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          OPEN IN NEW TAB
        </a>

        {edition.printAvailable ? (
          <a
            href={edition.printOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            ORDER PRINT
          </a>
        ) : null}
      </div>

      {edition.disclaimer ? (
        <p className="read-edition-disclaimer reveal-item">
          {edition.disclaimer}
        </p>
      ) : null}

      <div className="read-edition-embed-wrap reveal-item">
        <iframe
          src={edition.embedUrl}
          allowFullScreen
          allow="clipboard-write"
          scrolling="no"
          className="fp-iframe read-edition-iframe"
          title={`${edition.label} flipbook`}
          loading="lazy"
        />
      </div>

      {edition.printAvailable ? (
        <section className="read-edition-print-block reveal-item">
          <h2 className="text-header read-edition-print-title">
            ORDER YOUR{" "}
            <span className="text-header-emphasized">PRINTED COPY</span> TODAY.
          </h2>
          <p className="text-body read-edition-print-body">
            We are so excited to be moving into the world of print! You are now
            eligible to order a physical copy of our Fall/Winter 2026 edition.
            If you are interested, please see the form below:
          </p>
          <a
            href={edition.printOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            ORDER NOW
          </a>
        </section>
      ) : null}
    </div>
  );
}

export default ReadEdition;
