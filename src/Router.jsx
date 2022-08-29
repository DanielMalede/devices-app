import { Routes, Route } from "react-router-dom";
import { Devices, Home, Movies, MovieDetails } from "./components/index";
import DeviceProvider from "./context/Devices-context/Devices-context";
import MoviesContext from "./context/Movie-Context/Movie-Context";

export default function Router() {
  return (
    <Routes>
      <Route
        path="Devices"
        element={
          <DeviceProvider>
            <Devices />
          </DeviceProvider>
        }
      />
      <Route
        path="Movies"
        element={
          <MoviesContext>
            <Movies />
          </MoviesContext>
        }
      />
      <Route
        path="MovieDetails"
        element={
          <MoviesContext>
            <MovieDetails />
          </MoviesContext>
        }
      />
      <Route path="Home" element={<Home />} />
    </Routes>
  );
}
