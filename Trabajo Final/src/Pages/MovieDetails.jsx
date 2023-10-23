import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import styles from "../modules/MovieDatails.module.css";
import { Spinner } from "../components/Spinner";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}