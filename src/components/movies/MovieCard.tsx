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

import { useState } from 'react';
import MovieModal from './MovieModal';

export default function MovieCard({ movie }: { movie: Movie }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-gray-200 dark:bg-zinc-900 p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-3"
        />
        <h2 className="text-lg font-semibold text-black dark:text-white">{movie.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{movie.release_date}</p>
      </div>

      {showModal && <MovieModal movie={movie} onClose={() => setShowModal(false)} />}
    </>
  );
}


