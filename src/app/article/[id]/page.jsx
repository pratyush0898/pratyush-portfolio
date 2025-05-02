import React from "react";
import Head from "next/head";
import Logo from "@/components/common/logo.jsx";
import INFO from "@/data/user.js";
import { fetchFormattedArticles } from "@/api/api.js";
import "@/styles/readArticle.css";
import BackButton from "@/components/common/BackButton.jsx";

export default async function ReadArticle({ params }) {
    const myArticles = await fetchFormattedArticles();
    const slug = params.id;
    const article = myArticles[parseInt(slug) - 1];

    if (!article) {
        return <div>Article not found or failed to load.</div>;
    }

    return (
        <React.Fragment>
            <Head>
                <title>{`${article.title} | ${INFO.main.title}`}</title>
                <meta name="description" content={article.description} />
                <meta name="keywords" content={article.keywords.join(", ")} />
                <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
                <script src="https://files.bpcontent.cloud/2024/11/13/13/20241113130426-YK6QCUIT.js"></script>
            </Head>
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
