/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';

export const useNews = (category: string) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setArticles([]); // clear on category change
    setPage(1);
  }, [category]);

  useEffect(() => {
    setLoading(true);
    fetchNews(category, page)
      .then((res) => {
        setArticles((prev) => [...prev, ...res.articles]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category, page]);

  return {
    articles,
    loading,
    nextPage: () => setPage((p) => p + 1),
  };
};
