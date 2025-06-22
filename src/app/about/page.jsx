import React from "react";
// Removed: import Head from "next/head";

import Logo from "@/components/common/logo.jsx";
import Socials from "@/components/about/socials.jsx";

import INFO from "@/data/user";
import SEO from "@/data/seo";

import "@/styles/about.css";

export const metadata = {
  title: `About | ${INFO.main.title}`,
  description: SEO.find((item) => item.page === "about").description,
  keywords: SEO.find((item) => item.page === "about").keywords.join(", "),

  openGraph: {
    title: `About | ${INFO.main.title}`,
    description: SEO.find((item) => item.page === "about").description,
    url: "https://nvmpratyush.vercel.app/about",
    siteName: "Pratyush Kumar",
    images: [
      {
        url: "/about.jpg",
        width: 1200,
        height: 630,
        alt: "About Pratyush Kumar",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: `About | ${INFO.main.title}`,
    description: SEO.find((item) => item.page === "about").description,
    images: ["/about.jpg"],
    creator: "@nvmpratyush",
  },
};


const About = () => {
	return (
		<React.Fragment>
			{/* Removed <Head> */}
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
