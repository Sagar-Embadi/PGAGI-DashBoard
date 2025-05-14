/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSourceName } from '@/utils/newsUtils';

type Props = {
  article: any;
  onClick: () => void;
};

const NewsCard = ({ article, onClick }: Props) => (
  <div
    className="cursor-pointer p-4 border rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition"
    onClick={onClick}
  >
    {article?.urlToImage && (
      <img
        src={article.urlToImage || 'https://wallpaperaccess.com/full/2112629.jpg'} 
        alt="news"
        className="w-full h-48 object-cover mb-3 rounded"
      />
    )}
    <h3 className="text-lg font-semibold mb-1">{article?.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-2">
      {article?.description}
    </p>
    <div className="text-xs text-gray-500">{getSourceName(article?.url)}</div>
  </div>
);

export default NewsCard;
