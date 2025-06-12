'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles/navBar.css";

const NavBar = () => {
	const pathname = usePathname();

	const getActive = (path) => {
		if (path === "/" && pathname === "/") return "nav-item active";
		if (path !== "/" && pathname.startsWith(path)) return "nav-item active";
		return "nav-item";
	};

	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li className={getActive("/")}>
							<Link href="/">Home</Link>
						</li>
						<li className={getActive("/about")}>
							<Link href="/about">About</Link>
						</li>
						<li className={getActive("/projects")}>
							<Link href="/projects">Projects</Link>
						</li>
						<li className={getActive("/articles")}>
							<Link href="/articles">Articles</Link>
						</li>
						<li className={getActive("/contact")}>
							<Link href="/contact">Contact</Link>
						</li>
						<li className={getActive("/support")}>
							<Link href="/support">Support me</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
