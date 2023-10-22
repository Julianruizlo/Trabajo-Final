import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

const imageUrl = `https://image.tmdb.org/t/p/origi${movie.backdrop_path}`
function Carrousel() {
    useEffect(() => {
        const [movies, setMovies] = useState([]);
      }, []);
    
      const movies = async () => {
        const response = await fetch(
            get(movie).then((data) => {
                
                
              });
        );
        const data = await response.json();
        setMovies(data.results);
      };
      console.log(getRelatedMovies);
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src={imageUrl}
        />
        <Carousel.Caption>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={imageUrl}/>
        <Carousel.Caption>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={imageUrl} />
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