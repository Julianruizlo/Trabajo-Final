 import movies from "../movies.json"
import { MovieCard } from "../components/MovieCard";
import styles from "../modules/MoviesGrid.module.css"
 function MoviesGrid() {
   
    return(
            <ul className={styles.movieGrid}>
                {movies.map((movie) =>
                
                <MovieCard key={movie.id} movie={movie}/>
                )
                }
            </ul>

    )
}
export default MoviesGrid;