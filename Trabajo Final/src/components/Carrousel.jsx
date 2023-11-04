import {useState,useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";


function MovieContainer({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie?page=";
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      console.log(movies)
      setIsLoading(false);
    });

  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  return (    
     <Carousel fade>
      {movies&& movies.map((movie,key)=> (
        <Carousel.Item key={key} >
      <img src={getMovieImg(movie.backdrop_path, 500)} />
      <Carousel.Caption>
        <h3>{movie.title}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      
    </Carousel.Item>
      ))}
  </Carousel>
);
}


export default MovieContainer;