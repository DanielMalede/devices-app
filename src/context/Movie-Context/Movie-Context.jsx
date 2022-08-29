import { createContext, useState } from "react";
import "./Movie-Context.css";

export const moviesContext = createContext();
function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([1,2,]);
  return (
    <moviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </moviesContext.Provider>
  );
}

export default MoviesProvider;
