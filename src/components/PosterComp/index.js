import React from "react";
import "./index.css";

function PosterComp({ movieData }) {
  const backdropPath = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
  const genresString = movieData.genres.map((genre) => genre.name).join(", ");
  return (
    <div className="movie-desc-inside-cont">
      <div>
        <div className="movie-image-title-desc-cont">
          <img
            src={posterPath}
            alt={movieData.original_title}
            className="movie-desc-img"
          />
          <div className="title-overview-cont">
            <h1>{movieData.original_title}</h1>
            <h3>Rating: {movieData.vote_average}</h3>
            <div className="time-genre-cont">
              <h4 className="tot-min">{movieData.runtime} min</h4>
              <h4>{genresString}</h4>
            </div>
            <h3>Release Date: {movieData.release_date}</h3>
          </div>
        </div>
        <div className="overview-cont">
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
        </div>
      </div>
      <div>
        <img
          src={backdropPath}
          alt={movieData.original_title}
          className="backdrop-image"
        />
      </div>
    </div>
  );
}

export default PosterComp;
