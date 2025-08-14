import axios from "axios";
import type { Movie } from "../types/movie";

export interface SearchResponse {
  results: Movie[];
}

const myKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<SearchResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        language: "en-US",
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: "application/json",
      },
    },
  );
  return response.data.results;
};
