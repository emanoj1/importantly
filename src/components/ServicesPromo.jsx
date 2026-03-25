import { Link } from "react-router-dom";

export default function ServicesPromo() {
  return (
    <section className="container services-promo-section">
      <div className="services-promo">
        <div className="services-promo-copy">
          <p className="services-promo-eyebrow">Now offering client work</p>
          <h2>Need help building something?</h2>
          <p className="services-promo-text">
            Alongside my own products, I also help startups, small businesses,
            and individuals build websites and web apps - from idea to launch.
          </p>
          <p className="services-promo-subtext">
            Simple, practical builds. No agency overhead.
          </p>
        </div>

        <Link to="/services/websites" className="services-promo-button">
          Learn More
        </Link>
      </div>
    </section>
  );
}
