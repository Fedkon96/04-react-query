import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { fetchMovies } from "../../services/movieService";
import MovieGrid from "../MovieGrid/MovieGrid";
import type { Movie } from "../../types/movie";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

export default function App() {
  const [movies, setMovies] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [page, setPage] = useState(1);

  const {
    data: isMoviesData,
    isError: isMoviesError,
    isLoading: isMoviesLoading,
    isSuccess: isMoviesSuccess,
  } = useQuery({
    queryKey: ["movies", movies, page],
    queryFn: () => fetchMovies(movies, page),
    enabled: !!movies,
    placeholderData: keepPreviousData,
  });

  const totalPages = isMoviesData?.total_pages || 0;

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isMoviesSuccess && isMoviesData?.results?.length === 0) {
      toast.error("No movies found for your request.");
    }
  }, [isMoviesSuccess, isMoviesData]);

  const handleSearch = (newQuery: string) => {
    setMovies(newQuery);
    setPage(1);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />

      {isMoviesSuccess && totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}

      <Toaster position="bottom-right" />
      {isMoviesLoading && <Loader />}
      {isMoviesError && <ErrorMessage />}

      {isMoviesSuccess && isMoviesData?.results.length > 0 && (
        <MovieGrid movies={isMoviesData.results} onSelect={openModal} />
      )}

      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}
