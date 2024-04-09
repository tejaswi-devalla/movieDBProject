import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const MovieComponent = (props) => {
  const { movieData } = props;
  const imgPath = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`;
  return (
    <Link
      to={`/movie/${movieData.id}_${movieData.original_title}`}
      className="link-item"
    >
      <div className="movie-comp-cont">
        <div>
          <img
            src={imgPath}
            alt={movieData.original_title}
            className="movie-image"
          />
        </div>
        <div className="movie-text">
          <h4 className="movie-title">{movieData.original_title}</h4>
          <p className="movie-rating">Rating: {movieData.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieComponent;
