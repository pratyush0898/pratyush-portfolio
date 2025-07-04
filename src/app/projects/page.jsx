import React from "react";
// Removed: import Head from "next/head";

import Logo from "@/components/common/logo";
import AllProjects from "@/components/projects/allProjects.jsx";

import INFO from "@/data/user";
import SEO from "@/data/seo";

import "@/styles/projects.css";

export const metadata = {
  title: `Projects | ${INFO.main.title}`,
  description: SEO.find((item) => item.page === "projects").description,
  keywords: SEO.find((item) => item.page === "projects").keywords.join(", "),

  openGraph: {
    title: `Projects | ${INFO.main.title}`,
    description: SEO.find((item) => item.page === "projects").description,
    url: "https://nvmpratyush.vercel.app/projects",
    siteName: "Pratyush Kumar",
    images: [
      {
        url: "/homepage.png", // fallback Open Graph image
        width: 1400,
        height: 1400,
        alt: "Pratyush Kumar Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `Projects | ${INFO.main.title}`,
    description: SEO.find((item) => item.page === "projects").description,
    images: ["/homepage.png"],
    creator: "@nvmpratyush",
  },
};

const Projects = () => {
	return (
		<React.Fragment>
			{/* Removed <Head> */}
			<div className="content-wrapper">
				<div className="projects-logo-container">
					<div className="projects-logo">
						<Logo width={46} />
					</div>
				</div>
				<div className="projects-container">
					<div className="title projects-title">
						Things I’ve made trying to put my dent in the
						universe.
					</div>
					<div className="subtitle projects-subtitle">
						I've worked on a variety of projects over the years
						and I'm proud of the progress I've made. Many of
						these projects are open-source and available for
						others to explore and contribute to. If you're
						interested in any of the projects I've worked on,
						please feel free to check out the code and suggest
						any improvements or enhancements you might have in
						mind. Collaborating with others is a great way to
						learn and grow, and I'm always open to new ideas and
						feedback.
					</div>
					<div className="projects-list">
						<AllProjects />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
