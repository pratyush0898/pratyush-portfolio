import React from "react";
// Removed: import Head from "next/head";
import Logo from "@/components/common/logo.jsx";
import INFO from "@/data/user.js";
import { fetchFormattedArticles } from "@/app/api/api.js";
import "@/styles/readArticle.css";
import BackButton from "@/components/common/BackButton.jsx";

export async function generateMetadata({ params }) {
    const myArticles = await fetchFormattedArticles();
    const slug = params.id;
    const article = myArticles[parseInt(slug) - 1];
    if (!article) {
        return {
            title: `Article Not Found | ${INFO.main.title}`,
            description: "Article not found or failed to load.",
            robots: "noindex, nofollow"
        };
    }
    return {
        title: `${article.title} | ${INFO.main.title}`,
        description: article.description,
        keywords: Array.isArray(article.keywords) ? article.keywords.join(", ") : undefined
    };
}

export default async function ReadArticle({ params }) {
    const myArticles = await fetchFormattedArticles();
    const slug = params.id;
    const article = myArticles[parseInt(slug) - 1];

    if (!article) {
        return <div>Article not found or failed to load.</div>;
    }

    return (
        <React.Fragment>
            {/* Removed <Head> */}
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
                            <div className="read-article-date">
                                {article.date}
                            </div>
                        </div>
                        <div className="title read-article-title">
                            {article.title}
                        </div>
                        <div className="read-article-body">
                            <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
