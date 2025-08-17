import React, { Suspense } from "react";
import Logo from "@/components/common/logo";
import INFO from "@/data/user";
import SEO from "@/data/seo";
import "@/styles/articles.css";
import ArticlesList from "@/components/articles/ArticlesList";

export const metadata = {
  title: `Articles | ${INFO.main.title}`,
  description: SEO.find((item) => item.page === "articles").description,
  keywords: SEO.find((item) => item.page === "articles").keywords.join(", "),
};

const Articles = () => {
  return (
    <div className="content-wrapper">
      <div className="articles-logo-container">
        <div className="articles-logo">
          <Logo width={46} />
        </div>
      </div>
      <div className="articles-main-container">
        <div className="title articles-title">{INFO.articles.title}</div>
        <div className="subtitle articles-subtitle">
          {INFO.articles.description}
        </div>
        <div className="articles-container">
          <Suspense
            fallback={
              <div className="homepage-articles">
                <p className="subtitle homepage-subtitle">Loading articles…</p>
              </div>
            }
          >
            <ArticlesList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Articles;
