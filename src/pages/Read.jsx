import { Link } from "react-router-dom";
import { editions } from "../data/editions";
import "./Read.css";

function Read() {
  return (
    <div className="read-page">
      <div className="read-intro reveal-item">
        <h1 className="text-header">
          Read <span className="text-header-emphasized">Spell Magazine</span>.
        </h1>
        <p className="text-body read-subtitle">
          Explore all editions of our magazine.
        </p>
      </div>

      <div className="edition-grid">
        {editions.map((edition) => (
          <div
            className="edition-card reveal-item reveal-fixed-left"
            key={edition.id}
          >
            <div className="edition-label-row">
              <span className="edition-label">{edition.label}</span>
            </div>
            <Link
              to={`/read/${edition.id}`}
              className="edition-image-wrap image-hover-link image-hover-shadow-dark"
              aria-label={`Open ${edition.label} edition`}
            >
              <img
                src={edition.image}
                alt={`SPELL Magazine — ${edition.label} front cover`}
                className="edition-image edition-image-front image-hover-target"
              />
              <img
                src={edition.backImage}
                alt={`SPELL Magazine — ${edition.label} back cover`}
                className="edition-image edition-image-back image-hover-target"
                aria-hidden="true"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
