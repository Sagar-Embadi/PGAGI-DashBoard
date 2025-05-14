/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

import React, { useEffect } from 'react';

type Props = {
  movie: Movie;
  onClose: () => void;
};

const MovieModal = ({ movie, onClose }: Props) => {
  if (!movie) return null;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Movie Poster */}
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full md:w-64 rounded object-cover"
            />
          )}

          {/* Right: Movie Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {movie.overview}
              </p>
              <p className="text-sm text-yellow-500 font-medium mb-2">
                ⭐ {movie.vote_average} / 10 ({movie.vote_count} votes)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Release Date: {movie.release_date}
              </p>
            </div>

            {/* External Link */}
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-4"
            >
              View Full Details →
            </a>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6 text-right">
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

export default MovieModal;

