import { fetchFormattedArticles } from "./fetchFormattedArticles";

export const fetchArticleById = async (id) => {
    const data = await fetchFormattedArticles();
    if (!data.length) return null;
    return data[parseInt(id) - 1] || null;
};