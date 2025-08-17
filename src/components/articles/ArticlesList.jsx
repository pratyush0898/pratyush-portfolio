"use client";
import React, { useEffect, useState } from "react";
import Article from "@/components/articles/article";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const res = await fetch("/api/articles", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch articles");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error("Error loading articles:", err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  return (
    <div className="articles-wrapper">
      {articles.map((article, index) => (
        <div className="articles-article" key={index}>
          <Article
            date={article.date}
            title={article.title}
            description={article.description}
            link={`/article/${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
