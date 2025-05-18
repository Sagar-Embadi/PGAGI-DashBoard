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

export interface TMDBResponse {
  page: number;
  results: Movie[];
}


const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchTrendingMovies(): Promise<TMDBResponse> {
  try {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);  
  if (!res.ok) throw new Error("API response not OK");
  return res.json();
} catch (err) {
  console.error("Fetch error:", err);
  throw err;
}
}
