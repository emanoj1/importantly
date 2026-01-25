const apps = [
    {
      name: "InterviewMonk",
      desc: "Role-specific interview preparation tailored to the job and the candidate.",
      url: "https://interviewmonk.co",
      logo: "/logos/interviewmonk-sq-logo.png",
    },
    {
      name: "Featureless",
      desc: "A clean, distraction-free writing space for focused thinking.",
      url: "https://featureless.app",
      logo: "/logos/featureless-sq-logo.png",
    },
    {
        name: "Share your Kofi",
        desc: "A directory of Ko-fi users.",
        url: "https://shareyourkofi.com",
        logo: "/logos/shareyourkofi-sq-logo.png",
      },

  ];
  
  export default function Apps() {
    return (
      <section id="apps" className="container">
        <h2 className="section-title">What we’ve built</h2>
  
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
        </div>
      </section>
    );
  }
  
  