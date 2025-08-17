"use client";
import React, { useEffect, useState } from "react";
import Article from "@/components/articles/article";
import myArticles from "@/data/articles";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(myArticles);
  }, []);

  return (
    <div className="articles-wrapper">
      {articles.map((article, index) => (
        <div className="articles-article" key={index}>
          <Article
            date={article().date}
            title={article().title}
            description={article().description}
            link={`/article/${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
