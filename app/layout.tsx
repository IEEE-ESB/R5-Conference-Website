import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import SlantedFooterWrapper from "./components/SlantedFooterWrapper";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "IEEE ESB",
	description: "IEEE Edinburg Student Branch",
};

function Header() {
	return (
		<div className="navbar">
			<a href="/" className="navbar-left">
				<img src="/ieee_mb_white.png" className="navbar-logo" />
				<h1 className="navbar-title">Edinburg Student Branch</h1>
			</a>
			<nav className="navbar-menu">
				<a href="/about">About Us</a>
				<a href="/events">Events</a>
				<a href="/membership">Membership</a>
				<a href="/leadership">Leadership</a>
				<a href="/collaborate">Collaborate</a>
				<a href="/contact">Contact Us</a>
			</nav>
		</div>
	);
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="https://ieee.org" target="_blank">
            <img src="/ieee_mb_white.png" />
          </a>
        </div>

        <div className="footer-nav">
          <a href="/about">About Us</a>
          <a href="/membership">Membership</a>
          <a href="/contact">Contact Us</a>

          <a href="/events">Events</a>
          <a href="/leadership">Leadership</a>
          <a href="/collaborate">Collaborate</a>
        </div>
      </div>

      <div className="footer-socials">
        <a
          href="https://discord.gg/jMR3z42"
          target="_blank"
          aria-label="Discord"
          className="discord"
        >
          <img src="discord.svg" alt="Discord" />
        </a>
        <a
          href="https://instagram.com/ieee.edinburg"
          target="_blank"
          aria-label="Instagram"
          className="instagram"
        >
          <img src="instagram.svg" alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/ieeeedinburg"
          target="_blank"
          aria-label="Facebook"
          className="facebook"
        >
          <img src="facebook.png" alt="Facebook" />
        </a>
      </div>

      <div className="footer-bottom">IEEE EDINBURG STUDENT BRANCH 2026</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<div style={{ marginTop: "5rem" }} />
				{children}
				<SlantedFooterWrapper />
				<Footer />
			</body>
		</html>
	);
}
