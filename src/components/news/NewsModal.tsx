import React from 'react';
import { Dialog } from '@headlessui/react';

type Props = {
  article: any;
  onClose: () => void;
};

const NewsModal = ({ article, onClose }: Props) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-2xl p-6">
        <Dialog.displayName className="text-xl font-semibold mb-2">
          {article.title}
        </Dialog.displayName>
        {article.urlToImage && (
          <img src={article.urlToImage} className="w-full mb-3 rounded" alt="full" />
        )}
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {article.content || article.description}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm"
        >
          Read Full Article →
        </a>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;