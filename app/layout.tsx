import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { profile } from "@/data/site";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} – ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="footer wrap">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <Socials />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </footer>
      </body>
    </html>
  );
}
