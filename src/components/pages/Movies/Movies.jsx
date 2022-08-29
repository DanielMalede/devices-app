import "./Movies.css";
import React, { useContext, useEffect } from "react";
import { moviesContext } from "../../../context/Movie-Context/Movie-Context";
import MovieCard from "../../features/Movie-Card/Movie-Card";
import moviesApi from "../../../service/movies.service";
function Movies() {
  const { movies, setMovies } = useContext(moviesContext);
  useEffect(
    () => {moviesApi().then(res=>setMovies(res))

    },[]
  );
  return (
    <div className="movies">
      {movies.map((movieItem) => (
        <MovieCard movieItem={movieItem}/>
      ))}
    </div>
  );
}

export default Movies;
