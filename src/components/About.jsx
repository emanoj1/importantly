export default function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Importantly</h2>

      <p style={{ maxWidth: "760px" }}>
        Importantly is a solo independent web apps & e-commerce studio focused on building small,
        high-quality web applications that solve specific problems well.
        Each product is designed with clarity, restraint, and long-term usefulness
        in mind.
      </p>

      <h3 className="about-subtitle">How we work</h3>
      <p style={{ maxWidth: "760px" }}>
        Importantly focuses on building narrow, well-defined products rather than
        large, general-purpose platforms. We ship early, learn from real usage,
        and iterate thoughtfully - without feature bloat or unnecessary complexity.
      </p>

      <h3 className="about-subtitle">What we focus on</h3>
      <ul className="about-list">
        <li>
          <strong>Clarity over complexity</strong> - tools that reduce cognitive
          load and decision fatigue.
        </li>
        <li>
          <strong>Speed with responsibility</strong> - moving fast while
          maintaining and improving what we ship.
        </li>
        <li>
          <strong>Long-term usefulness</strong> - products built to last, not to
          chase short-term trends.
        </li>
      </ul>

      <h3 className="about-subtitle">Who this is for</h3>
      <p style={{ maxWidth: "760px" }}>
        Importantly builds products for individuals and small teams who value
        focus, thoughtful software, and tools that respect their time and attention.
      </p>

      <h3 className="about-subtitle">Currently exploring</h3>
      <p style={{ maxWidth: "760px", color: "var(--muted)" }}>
        Alongside launched products, Importantly actively explores new ideas in
        productivity, personal software, and lightweight tools for focused work.
        Some ideas evolve into products. Others remain experiments.
      </p>
    </section>
  );
}
