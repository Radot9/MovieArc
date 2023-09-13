import React from "react";

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie">
      <div>
        <img
          src={
            movie.poster_path !== null //
              ? `${API_IMG}${movie.poster_path}`
              : "https://via.placeholder.com/400x600"
          }
          alt={movie.title}
        />
      </div>
      <div>
        <p className="text-xs my-2">{movie.release_date.slice(0, 4)}</p>
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="my-2">Rating : {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
