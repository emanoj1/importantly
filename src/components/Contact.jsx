export default function Contact() {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact</h2>

      <p>Have an idea, collaboration, or question?</p>

      <div className="contact-actions">
        <div className="contact-primary-actions">
          <button
            className="contact-button"
            data-tally-open="aQ2vD9"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Start a conversation
          </button>

          <a
            href="https://x.com/emanoj_"
            target="_blank"
            rel="noreferrer"
            className="x-button"
          >
            <span className="x-icon">𝕏</span>
            <span>Connect with the founder</span>
          </a>
        </div>

        <div className="contact-social-actions">
          <a
            href="https://www.linkedin.com/company/importantly/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
          >
            <span className="linkedin-icon">in</span>
            <span>Follow Importantly on LinkedIn</span>
          </a>

          <a
            href="https://www.facebook.com/importantly.dev"
            target="_blank"
            rel="noreferrer"
            className="facebook-button"
          >
            <span className="facebook-icon">f</span>
            <span>Follow Importantly on Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}
