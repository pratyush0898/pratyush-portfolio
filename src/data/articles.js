// articles.js
import React from 'react'
import { fetchAPI } from '@/lib/fetchAPI'

const API_URL = 'http://nvmpratyush.vercel.apps/api/articles';

/**
 * Fetch your pre–formatted articles from your own API,
 * instead of hitting dev.to on the client.
 */
const rawArticles = await fetchAPI(API_URL)

const myArticles = rawArticles.map(a => {
  // a has { date, title, description, keywords, bodyHtml }
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
      )
    }
  }
})

export default myArticles;
