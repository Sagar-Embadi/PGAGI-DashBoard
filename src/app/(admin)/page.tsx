import type { Metadata } from "next";
import React from "react";
import WeatherSearchCard from "@/components/weather/WeatherSearchCard";
import NewsFeed from "@/components/news/NewsFeed";
import StockSearchCard from "@/components/stocks/StockSearchCard";
import MovieCard from "@/components/movies/MovieCard";
import { fetchTrendingMovies } from "@/services/moviesService";

export const metadata: Metadata = {
  title:"PG-AGI - Dashboard",
  description: "This is PG-AGI Dashboard Template",
};

export default async function Page() {
  const data = await fetchTrendingMovies();
    const movies = data.results;
  return (
    <div className="grid grid-cols-12 gap-3 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-6">
        <WeatherSearchCard/>
      </div>

      <div className="col-span-12 xl:col-span-6">
        <StockSearchCard/>
      </div>

      <div className="col-span-12">
        <NewsFeed/>
      </div>
      <div className="col-span-12">
        <main className="bg-white dark:bg-black min-h-screen text-white p-8">
              <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">🎬 Trending Movies</h1>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </main>
      </div>
    </div>
  );
}
