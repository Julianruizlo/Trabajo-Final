import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "../components/MovieCard";
import styles from "../modules/MoviesGrid.module.css";
import { Spinner } from "../components/Spinner";
import { Empty } from "../components/Empty";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);


  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
   
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
      <>
      
      <ul className={styles.movieGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      </>
  );
}
