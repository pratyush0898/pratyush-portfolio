"use client";
const { fetchAPI } = require("./fetchAPI");

const API_URL = "/api/articles";

export const fetchFormattedArticles = async () => {
  const data = await fetchAPI(API_URL);
  if (!Array.isArray(data)) return [];
  return data;
};
