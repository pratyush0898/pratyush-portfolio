"use client";
import React, { Suspense } from "react";
import Logo from "@/components/common/logo";
import INFO from "@/data/user";
import "@/styles/articles.css";
import ArticlesList from "@/components/articles/ArticlesList";

const Articles = () => {
  return (
    <>
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
              <div className="articles-wrapper">
                <noscript>Articles API needs JavaScript to render</noscript>
                <p className="subtitle homepage-subtitle">Loading articles…</p>
              </div>
            }
          >
            <ArticlesList />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Articles;
