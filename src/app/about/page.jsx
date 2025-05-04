import React from "react";
import Head from "next/head";

import Logo from "@/components/common/logo.jsx";
import Socials from "@/components/about/socials.jsx";

import INFO from "@/data/user";
import SEO from "@/data/seo";

import "@/styles/about.css";

const About = () => {

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Head>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
					/>
			</Head>

				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="../about.jpg"
											alt="Pratyush Kumar"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
				</div>
		</React.Fragment>
	);
};

export default About;
