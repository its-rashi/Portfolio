"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { profile } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">{profile.name}</Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="nav-links" className={open ? "links open" : "links"} aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>{l.label}</Link>
          ))}
          <a href={`mailto:${profile.email}`} className="btn primary nav-cta">Hire me</a>
        </nav>
      </div>
    </header>
  );
}
