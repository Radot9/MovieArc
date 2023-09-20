import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/Search.svg";
import MovieCard from "./MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=99d9382263c2faf0029e176a767eed79";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=99d9382263c2faf0029e176a767eed79";

// const movie = {
//   genre_ids: [14, 28],
//   popularity: 73.454,
//   poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
//   release_date: "2002-05-01",
//   title: "Spider-Man",
//   vote_average: 7.278,
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();
    setMovies(data.results);
  };
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_SEARCH}&query=${title}`);
    const data = await response.json();
    setMovies(data.results);
  };
  useEffect(() => {
    getMovies("");
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl text-center my-4">MovieArc</h1>
      <div className="search flex bg-white py-2 px-4 rounded-full max-w-[400px] shadow-md mx-auto">
        <input
          className=" flex-1 focus:outline-0"
          type="text"
          placeholder="Search movie"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <img
          className="cursor-pointer"
          src={SearchIcon}
          alt="search-icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container grid justify-center lg:grid-cols-4 md:grid-cols-3 mt-12 mx-auto gap-8">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
};

export default App;
