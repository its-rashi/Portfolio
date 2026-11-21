import Image from "next/image";
import Socials from "@/components/Socials";
import { profile, principles } from "@/data/site";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <section className="wrap page about">
        <div className="frame">
          <div className="frame-inner">
            <Image
              src={profile.images.about}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 900px) 40vw, 90vw"
            />
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1 className="title">
            About <span className="outline">me</span>
          </h1>
          <p className="lead">
            Hi, I am {profile.name}. {profile.intro}
          </p>
          <p>
            
          </p>
          <p>
           
          </p>
          <div className="actions">
            <a href={`mailto:${profile.email}`} className="btn primary">
              Get in touch
            </a>
            <a href={profile.resume} download className="btn">
              Download resume
            </a>
          </div>
          <Socials />
        </div>
      </section>

      <section className="wrap block">
        <h2 className="h2">How I work</h2>
        <ul className="principles">
          {principles.map((p, i) => (
            <li key={p.title}>
              <span className="num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap block">
        <h2 className="h2">Gallery</h2>
        <div className="gallery">
          {profile.images.gallery.map((src, i) => (
            <div key={src} className="tile">
              <Image
                src={src}
                alt={`Photo ${i + 1} of ${profile.name}`}
                fill
                sizes="(min-width: 900px) 30vw, (min-width: 560px) 45vw, 90vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
