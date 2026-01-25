const apps = [
    {
      name: "Interview Monk",
      desc: "Role-specific interview preparation tailored to the job and the candidate.",
      url: "https://interviewmonk.co",
    },
    {
      name: "Featureless",
      desc: "A clean, distraction-free writing space for focused thinking.",
      url: "https://featureless.app",
    },
  ];
  
  export default function Apps() {
    return (
      <section id="apps" className="container">
        <h2 className="section-title">What we’ve built</h2>
  
        <div className="cards">
          {apps.map((app) => (
            <div key={app.name} className="card">
              <h3>{app.name}</h3>
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
  