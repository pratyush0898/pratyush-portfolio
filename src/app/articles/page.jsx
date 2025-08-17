"use client";
import React, { Suspense } from "react";
import Logo from "@/components/common/logo";
import INFO from "@/data/user";
import "@/styles/articles.css";
import ArticlesList from "@/components/articles/ArticlesList";

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
          <ArticlesList />
        </div>
      </div>
    </div>
  );
};

export default Articles;
