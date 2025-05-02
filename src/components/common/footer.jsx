import React from "react";
import Link from "next/link";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link href="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/articles">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 nvmPratyush.netlify.app All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
