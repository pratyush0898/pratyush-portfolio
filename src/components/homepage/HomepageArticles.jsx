"use client";

import React, { useEffect, useState } from "react";
import Article from "@/components/homepage/article.jsx";

export default function HomepageArticles() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const res = await fetch("https://nvmpratyush.vercel.app/api/articles", { cache: "no-store" });
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

  if (loading) {
    return <div>Loading articles…</div>;
  }

  if (!articles || articles.length === 0) {
    return <div>No articles available right now.</div>;
  }

  return (
    <div className="homepage-articles">
      {articles.map((article, index) => (
        <Article
          key={(index + 1).toString()}
          date={article.date}
          title={article.title}
          description={article.description}
          link={`/article/${index + 1}`}
        />
      ))}
    </div>
  );
}
