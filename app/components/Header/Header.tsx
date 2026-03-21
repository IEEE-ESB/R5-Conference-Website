"use client";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="navbar">
			<a href="/" className="navbar-left">
				<img src="/ieee_mb_white.png" className="navbar-logo" alt="IEEE Logo" />
				<h1 className="navbar-title">
					<span className="hidden md:inline">Edinburg Student Branch</span>
					<span className="inline md:hidden">ESB</span>
				</h1>
			</a>
			<button
				className="hamburger-menu lg:hidden"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				<div />
				<div />
				<div />
			</button>
			<nav className={`navbar-menu ${isMenuOpen ? "active" : "hidden"} md:flex`}>
				<a href="/about">About Us</a>
				<a href="/events">Events</a>
				<a href="/membership">Membership</a>
				<a href="/leadership">Leadership</a>
				<a href="/collaborate">Collaborate</a>
				<a href="/contact">Contact Us</a>
			</nav>
		</header>
	);
}
