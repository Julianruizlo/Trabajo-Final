import Carousel from "../components/Carrousel"
import { MoviesGrid } from "../components/MoviesGrid";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";


export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 300);
  return (<div>
          <Carousel/>
          <MoviesGrid key={debouncedSearch} search={debouncedSearch}  />
        </div>
  );
}