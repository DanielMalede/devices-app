import "./Movie-Details.css";
import React, { useContext ,useEffect} from "react";
import { moviesContext } from "../../../context/Movie-Context/Movie-Context";
import MovieTable from "../../features/Movie-Table/Movie-Table";
import moviesApi from "../../../service/movies.service";
function MovieDetails() {
  const { movies, setMovies } = useContext(moviesContext);
  useEffect(() => {
    moviesApi().then((res) => setMovies(res));
  }, []);
  return (
    <div className="movie-details">
        <MovieTable movieItem={movies} />
    </div>
  );
}

export default MovieDetails;
