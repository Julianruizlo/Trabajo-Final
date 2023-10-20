import movies from "../movies.json"
import styles from "../modules/MovieCard.module.css"

export function MovieDetails(){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (<div className= {styles.detailesContainer}>
    <img src={imageUrl} alt={movies.title} />
        <div>
            <p><strong>Title:</strong> {movies.title}</p>
            <p><strong>Genres:</strong>{movies.genres.map(genre => genre.name).join(", ")}</p>
            <p>Description: {movies.overview}</p>
        </div>
    </div>
    );
}