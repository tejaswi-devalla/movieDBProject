import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PosterComp from "../PosterComp";
import CastComp from "../CastComp";
import "./index.css";

const Api_key = "ad28bf2bd70287774a001919ec71ce88";

function MovieDescription() {
  const { id } = useParams();
  const movieId = id.substring(0, id.indexOf("_"));
  const [movieData, setMovieData] = useState(null);
  const [creditsData, setCreditsData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const movieDescReponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_key}&language=en-US`
        );
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_key}&language=en-US`
        );
        if (movieDescReponse.ok === true) {
          const movieDescData = await movieDescReponse.json();
          setMovieData(movieDescData);
        }
        if (creditsResponse.ok === true) {
          const creditsResponseData = await creditsResponse.json();
          setCreditsData(creditsResponseData.cast);
        }
      } catch (error) {
        throw new Error("Failed to fetch movie data");
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div className="movie-desc-container">
      <div className="movie-inside-cont">
        {movieData ? (
          <PosterComp key={movieData.id} movieData={movieData} />
        ) : (
          "Error Loading Data"
        )}
      </div>
      <h1 className="cast-title">Cast</h1>
      <div className="cast-info-container">
        {creditsData
          ? creditsData.map((cast) => (
              <CastComp key={cast.cast_id} creditsData={cast} />
            ))
          : "Error Showing Cast information"}
      </div>
    </div>
  );
}
export default MovieDescription;
