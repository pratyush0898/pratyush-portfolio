"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/fetchAPI";

const API_URL = "/api/articles";

let myArticles = [];

export function useArticles() {
  const [articles, setArticles] = useState(myArticles);

  useEffect(() => {
    async function load() {
      const rawArticles = await fetchAPI(API_URL);
      myArticles = rawArticles.map((a) => {
        return function article() {
          return {
            date: a.date,
            title: a.title,
            description: a.description,
            keywords: a.keywords,
            style: ``,
            body: (
              <React.Fragment>
                <div dangerouslySetInnerHTML={{ __html: a.bodyHtml }} />
              </React.Fragment>
            ),
          };
        };
      });
      setArticles(myArticles);
    }
    load();
  }, []);

  return articles;
}

// default export stays as requested
export default myArticles;
