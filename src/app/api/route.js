const DEV_TO_API_URL = "https://dev.to/api/articles";

const fetchAPI = async (url) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        // Check if response is JSON
        const text = await response.text();
        try {
            return JSON.parse(text);
        } catch (e) {
            // Not JSON, return error
            throw new Error(text);
        }
    } catch (error) {
        console.error("Error fetching data:" + error);
        return null;
    }
};

const saveID = async (url) => {
    try {
        const data = await fetchAPI(url);
        if (!Array.isArray(data)) return [];
        const ids = data.map(article => article.id);
        return ids;
    } catch (error) {
        console.error("Error saving IDs:", error);
        return [];
    }
};

const fetchArticlesByIds = async (ids) => {
    try {
        const articles = await Promise.all(
            ids.map(async (id) => {
                const article = await fetchAPI(`${DEV_TO_API_URL}/${id}`);
                return article;
            })
        );
        return articles;
    } catch (error) {
        console.error("Error fetching articles by IDs:", error);
        return [];
    }
};

const fetchFormattedArticles = async () => {
    const ids = await saveID(DEV_TO_API_URL);
    if (!ids.length) return [];
    const articles = await fetchArticlesByIds(ids);
    return articles.map((a) => {
        if (!a) return null;
        const date = new Date(a.published_at).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
        return {
            date: date,
            title: a.title,
            description: a.description,
            keywords: a.tags,
            style: ``,
            bodyHtml: a.body_html,
        };
    }).filter(Boolean);
};

export { fetchAPI, saveID, fetchArticlesByIds, fetchFormattedArticles };
