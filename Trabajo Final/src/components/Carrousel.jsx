import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

const imageUrl = `https://image.tmdb.org/t/p/origin ${movies.backdrop_path}`
function Carrousel() {
    useEffect(() => {
        const [movies, setMovies] = useState([]);
      }, []);
    
      const movies = async () => {
        const response = await fetch(
            get(movies).then((data) => {
              
              setMovies(data.results);
                
              })
        );
        const data = await response.json();
      };
      console.log(getRelatedMovies);
  return (
    <Carousel>
      <Carousel.Item>
        <img src={imageUrl}
        />
        <Carousel.Caption>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imageUrl}/>
        <Carousel.Caption>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imageUrl} />
        <Carousel.Caption>
          <h3>{movie.title}</h3>
          <p>
          {movie.overview}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;