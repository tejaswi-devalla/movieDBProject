import React from "react";
import "./index.css";

function CastComp({ creditsData }) {
  const profilePath = `https://image.tmdb.org/t/p/w500/${creditsData.profile_path}`;
  return (
    <div className="cast-info-cont">
      <img
        src={profilePath}
        alt={creditsData.original_name}
        className="cast-image"
      />
      <h2>{creditsData.original_name}</h2>
      <h4>Character: {creditsData.character}</h4>
    </div>
  );
}

export default CastComp;
