/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';

import { useNews } from '@/hooks/useNews';
import NewsCard from '@/components/news/NewsCard';
import NewsModal from '@/components/news/NewsModal';

const categories = ['technology', 'sports', 'business', 'health', 'entertainment'];

const NewsFeed = () => {
  const [selected, setSelected] = useState('technology');
  const { articles, loading, nextPage } = useNews(selected);
  const [activeArticle, setActiveArticle] = useState<any | null>(null);

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-4 flex-wrap mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full border capitalize ${
              selected === cat ? 'bg-blue-500 text-white' : 'bg-white text-black dark:bg-gray-700 dark:text-white'
            }`}
            onClick={() => {
              setSelected(cat);
              window.scrollTo(0, 0);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <NewsCard key={i} article={a} onClick={() => setActiveArticle(a)} />
        ))}
      </div>
      <div className="text-center">
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={nextPage}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
      {activeArticle && (
        <NewsModal article={activeArticle} onClose={() => setActiveArticle(null)} />
      )}
    </div>
  );
};

export default NewsFeed;