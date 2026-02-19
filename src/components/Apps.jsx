const apps = [
  {
    name: "FirstPerson.me",
    desc: "Your one page to share the story behind your career",
    url: "https://firstperson.me",
    logo: "/logos/clw-logo.png",
  },
  {
    name: "Client Logo Wall",
    desc: "A simple widget to display your client logos.",
    url: "https://clientlogowall.com",
    logo: "/logos/clw-logo.png",
  },
  {
    name: "Interview Monk",
    desc: "Role-specific interview preparation doc tailored to the job and the candidate. Powered by AI.",
    url: "https://interviewmonk.co",
    logo: "/logos/interviewmonk-sq-logo.png",
  },
  {
    name: "Featureless",
    desc: "A clean, distraction-free writing space for focused thinking. Just write, one article at a time.",
    url: "https://featureless.app",
    logo: "/logos/featureless-sq-logo.png",
  },
  {
    name: "Share your Kofi",
    desc: "A directory of Ko-fi users. Meet more creators!",
    url: "https://shareyourkofi.com",
    logo: "/logos/shareyourkofi-sq-logo.png",
  },
];

export default function Apps() {
  return (
    <section id="apps" className="container">
      <h2 className="section-title">What's been built</h2>

      <div className="cards">
        {apps.map((app) => (
          <div key={app.name} className="card">
            <div className="card-header">
              <img
                src={app.logo}
                alt={`${app.name} logo`}
                className="card-logo"
              />
              <h3>{app.name}</h3>
            </div>

            <p>{app.desc}</p>

            <a href={app.url} target="_blank" rel="noreferrer">
              View product →
            </a>
          </div>
        ))}
        <div className="card muted">
          <h3>Let there be more!</h3>
          <p>New products are actively being built.</p>
        </div>
      </div>
    </section>
  );
}
