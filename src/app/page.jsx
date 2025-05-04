import React from "react";
import Head from "next/head";

import LogoWithScroll from "@/components/common/LogoWithScroll.jsx";
import Article from "@/components/homepage/article.jsx";
import Works from "@/components/homepage/works.jsx";
import AllProjects from "@/components/projects/allProjects.jsx";

import INFO from "@/data/user.js";
import SEO from "@/data/seo.js";
import myArticles from "@/data/articles.js";

import "@/styles/homepage.css";
import Socials from "@/components/homepage/socials";
import Skills from "@/components/homepage/skills";

const Homepage = () => {
	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Head>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				 />
			</Head>

			<div className="content-wrapper">
				<div className="homepage-logo-container">
					<LogoWithScroll />
				</div>

				<div className="homepage-container">
					<div className="homepage-first-area">
						<div className="homepage-first-area-left-side">
							<div className="title homepage-title">
								{INFO.homepage.title}
							</div>

							<div className="subtitle homepage-subtitle">
								{INFO.homepage.description}
							</div>
						</div>

						<div className="homepage-first-area-right-side">
							<div className="homepage-image-container">
								<div className="homepage-image-wrapper">
									<img
										src="homepage.png"
										alt="about"
										className="homepage-image"
									/>
								</div>
							</div>
						</div>
					</div>

					<Socials />

					<div className="homepage-projects">
						<AllProjects />
					</div>

					<div className="homepage-after-title">
						<div className="homepage-articles">
							{myArticles.map((article, index) => (
								<div
									className="homepage-article"
									key={(index + 1).toString()}
								>
									<Article
										key={(index + 1).toString()}
										date={article().date}
										title={article().title}
										description={article().description}
										link={"/article/" + (index + 1)}
									/>
								</div>
							))}
						</div>
						<div className="homepage-after-title-right">
							<div className="homepage-works">
								<Works />
							</div>
							<div className="homepage-skills">
								<Skills />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
