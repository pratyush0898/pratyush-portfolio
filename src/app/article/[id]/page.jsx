"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Logo from "@/components/common/logo.jsx";
import BackButton from "@/components/common/BackButton.jsx";
import "@/styles/readArticle.css";
import { fetchFormattedArticles } from "@/lib/fetchFormattedArticles";

export default function ReadArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      const articles = await fetchFormattedArticles();
      if (articles && articles.length > 0) {
        const found = articles[parseInt(id) - 1];
        setArticle(found || null);
      }
      setLoading(false);
    };
    loadArticle();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!article) return <div>Article not found or failed to load.</div>;

  return (
    <div className="content-wrapper">
      <div className="read-article-logo-container">
        <div className="read-article-logo">
          <Logo width={46} />
        </div>
      </div>
      <div className="read-article-container">
        <div className="read-article-back">
          <BackButton className="read-article-back-button" />
        </div>
        <div className="read-article-wrapper">
          <div className="read-article-date-container">
            <div className="read-article-date">{article.date}</div>
          </div>
          <div className="title read-article-title">{article.title}</div>
          <div className="read-article-body">
            <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
}
