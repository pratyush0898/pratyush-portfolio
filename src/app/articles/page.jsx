import React from "react";
// Removed: import Head from "next/head";

import Logo from "@/components/common/logo";
import Article from "@/components/articles/article";

import INFO from "@/data/user";
import SEO from "@/data/seo";
import myArticles from "@/data/articles";

import "@/styles/articles.css";

export const metadata = {
	title: `Articles | ${INFO.main.title}`,
	description: SEO.find((item) => item.page === "articles").description,
	keywords: SEO.find((item) => item.page === "articles").keywords.join(", ")
};

const Articles = () => {
	return (
		<React.Fragment>
			<div className="content-wrapper">
				<div className="articles-logo-container">
					<div className="articles-logo">
						<Logo width={46} />
					</div>
				</div>
				<div className="articles-main-container">
					<div className="title articles-title">
						{INFO.articles.title}
					</div>
					<div className="subtitle articles-subtitle">
						{INFO.articles.description}
					</div>
					<div className="articles-container">
						<div className="articles-wrapper">
							{myArticles.map((article, index) => (
								<div
									className="articles-article"
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
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
