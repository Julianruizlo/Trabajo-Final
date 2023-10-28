
import Carousel from 'react-bootstrap/Carousel';

import { getMovieImg } from "../utils/getMovieImg";


function MovieContainer() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
    
    
  }, []);
  const fetchData = async () => { const response = await get();
    setMovies(response.data.data);
    setIsLoading(false);
  }

  if (isLoading) {
    return <Spinner />;
  }
  
 
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (    
     <Carousel fade>
    <Carousel.Item>
      <img src={imageUrl} />
      <Carousel.Caption>
        <h3>{movie.title}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ExampleCarouselImage text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ExampleCarouselImage text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}


export default MovieContainer;