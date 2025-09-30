// ~/projects/pratyush-portfolio/src/app/api/articles/route.js
import { NextResponse } from 'next/server';

const DEV_TO_API_URL = 'https://dev.to/api/articles';

// In-memory cache for articles (5 minutes TTL)
let articlesCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 40 * 60 * 1000; // 40 minutes in milliseconds

// Utility function to fetch from API
const fetchAPI = async (url) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    const text = await res.text();
    return JSON.parse(text);
  } catch (e) {
    console.error('fetchAPI error:', e);
    return null;
  }
};

// Get article IDs from dev.to
const saveID = async () => {
  const list = await fetchAPI(DEV_TO_API_URL);
  return Array.isArray(list) ? list.map(a => a.id) : [];
};

// Fetch full article details by IDs
const fetchArticlesByIds = async (ids) => {
  return Promise.all(ids.map(id => fetchAPI(`${DEV_TO_API_URL}/${id}`)));
};

// Format articles for frontend consumption
const fetchFormattedArticles = async () => {
  const ids = await saveID();
  const raw = await fetchArticlesByIds(ids);
  return raw
    .filter(a => a)
    .map(a => ({
      date: new Date(a.published_at).toLocaleDateString('en-US', {
        day: '2-digit', 
        month: 'long', 
        year: 'numeric'
      }),
      title: a.title,
      description: a.description,
      keywords: a.tags,
      bodyHtml: a.body_html
    }));
};

// Check if cache is still valid
const isCacheValid = () => {
  return articlesCache && cacheTimestamp && 
         (Date.now() - cacheTimestamp) < CACHE_DURATION;
};

// GET handler for /api/articles
export async function GET() {
  try {
    // Return cached data if available and still valid
    if (isCacheValid()) {
      console.log('📦 Serving articles from cache');
      return NextResponse.json(articlesCache);
    }

    console.log('🔄 Fetching fresh articles from dev.to');
    
    // Fetch fresh data
    const articles = await fetchFormattedArticles();
    
    // Update cache
    articlesCache = articles;
    cacheTimestamp = Date.now();
    
    console.log(`✨ Cached ${articles.length} articles at ${new Date().toLocaleTimeString()}`);
    
    return NextResponse.json(articles);
    
  } catch (error) {
    console.error('⚠️  Error fetching articles:', error);
    
    // If we have cached data, return it even if stale
    if (articlesCache) {
      console.log('📦 Serving stale cache due to error');
      return NextResponse.json(articlesCache);
    }
    
    // Otherwise return error response
    return NextResponse.json(
      { error: 'Failed to fetch articles' }, 
      { status: 500 }
    );
  }
}