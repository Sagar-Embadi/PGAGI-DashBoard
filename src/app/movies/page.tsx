import { fetchTrendingMovies } from '@/services/moviesService';
import MovieCard from '@/components/movies/MovieCard'

export default async function Home() {
  const data = await fetchTrendingMovies();
  const movies = data.results;

  return (
    <main className="bg-white dark:bg-black min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">🎬 Trending Movies</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
