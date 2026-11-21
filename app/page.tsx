import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";
import { profile, projects } from "@/data/site";

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <>
      <section className="wrap hero">
        <div className="hero-copy">
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1 className="title">
            <span>{first}</span>
            {last && <span className="outline">{last}</span>}
          </h1>
          <p className="lead">{profile.tagline}</p>
          <div className="actions">
            <Link href="/projects" className="btn primary">
              View projects
            </Link>
            <Link href="/about" className="btn">
              About me
            </Link>
          </div>
          <Socials />
        </div>
        <div className="frame hero-frame">
          <div className="frame-inner">
            <Image
              src={profile.images.hero}
              alt={`Photo of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 900px) 40vw, 90vw"
            />
          </div>
          <span className="badge">
            <i /> {profile.status}
          </span>
        </div>
      </section>

      <section className="wrap stats" aria-label="Highlights">
        {profile.stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="wrap block">
        <div className="block-head">
          <h2 className="h2">Selected work</h2>
          <Link href="/projects" className="textlink">
            All projects
          </Link>
        </div>
        <ul className="work">
          {projects.slice(0, 3).map((p, i) => (
            <li key={p.slug}>
              <Link href="/projects">
                <span className="num">0{i + 1}</span>
                <span className="info">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </span>
                <span className="type">
                  {p.type} · {p.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="ticker" aria-label="Skills">
        <div className="ticker-track">
          {[0, 1].map((n) => (
            <ul key={n} aria-hidden={n === 1}>
              {profile.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <section className="wrap block">
        <div className="cta">
          <h2>Let’s build something great.</h2>
          <a href={`mailto:${profile.email}`} className="btn dark">
            Start a project
          </a>
        </div>
      </section>
    </>
  );
}
