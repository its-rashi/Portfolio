import { profile, projects } from "@/data/site";

export const metadata = { title: "Projects" };

export default function Projects() {
  const github = profile.links.find((l) => l.label === "GitHub");

  return (
    <>
      <section className="wrap page">
        <p className="eyebrow">Portfolio</p>
        <h1 className="title">Pro<span className="outline">jects</span></h1>
        <p className="lead">A few things I have built recently, what I did on each, and where to see them.</p>
        <div className="grid">
          {projects.map((p, i) => (
            <article key={p.slug} className="project">
              <div className="project-top">
                <span className="num">0{i + 1}</span>
                <span className="meta">{p.type} · {p.year}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <p className="role"><strong>My role</strong> {p.role}</p>
              <ul className="highlights">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              <div className="project-links">
                {p.demo && <a href={p.demo} className="btn primary">Live demo</a>}
                {p.code && <a href={p.code} target="_blank" rel="noreferrer noopener" className="btn">Source code</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {github && (
        <section className="wrap block">
          <div className="cta">
            <h2>Want to see more?</h2>
            <p>Browse all my repositories and experiments on GitHub.</p>
            <a href={github.href} target="_blank" rel="noreferrer noopener" className="btn dark">Visit GitHub</a>
          </div>
        </section>
      )}
    </>
  );
}
