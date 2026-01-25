const apps = [
    {
      name: "InterviewMonk",
      desc: "Role-specific interview preparation that replaces generic advice.",
      url: "https://interviewmonk.co",
    },
    {
      name: "Featureless",
      desc: "A distraction-free writing space for clear thinking.",
      url: "https://featureless.app",
    },
  ];
  
  export default function Apps() {
    return (
      <section id="apps" className="container">
        <h2 className="section-title">Apps launched</h2>
  
        {apps.map((app) => (
          <div key={app.name} style={{ marginBottom: "36px" }}>
            <h3 style={{ marginBottom: "8px" }}>{app.name}</h3>
            <p style={{ color: "var(--muted)", maxWidth: "520px" }}>
              {app.desc}
            </p>
            <a href={app.url} target="_blank" rel="noreferrer">
              Visit →
            </a>
          </div>
        ))}
      </section>
    );
  }
  