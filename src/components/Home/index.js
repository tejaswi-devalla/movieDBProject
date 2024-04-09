import React, { useEffect, useState } from "react";
import Header from "../Header";
import MovieComponent from "../MovieComponent";
import { Bars } from "react-loader-spinner";
import "./index.css";

const Api_key = "ad28bf2bd70287774a001919ec71ce88";

function Home({ type }) {
  const [allMovieData, setAllMoveData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        if (searchQuery) {
          const searchResponse = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${searchQuery}&page=${currentPage}`
          );
          if (searchResponse.ok) {
            const searchData = await searchResponse.json();
            setAllMoveData(searchData.results);
            setIsLoading(false);
          } else {
            throw new Error("Failed to fetch search data");
          }
        } else if (
          type === "popular" ||
          type === "top_rated" ||
          type === "upcoming"
        ) {
          const specificTypeResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=${Api_key}&language=en-US&page=${currentPage}`
          );
          if (specificTypeResponse.ok === true) {
            const specificResponse = await specificTypeResponse.json();
            setAllMoveData(specificResponse.results);
            setIsLoading(false);
          } else {
            throw new Error("Failed to fetch movie data");
          }
        } else {
          const popularResponse = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${currentPage}`
          );
          const topRatedResponse = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=${currentPage}`
          );
          const upcomingResponse = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=${currentPage}`
          );
          if (
            popularResponse.ok === true ||
            upcomingResponse.ok === true ||
            topRatedResponse.ok === true
          ) {
            const popularData = await popularResponse.json();
            const topRatedData = await topRatedResponse.json();
            const upcomingData = await upcomingResponse.json();
            const mergedData = [
              ...popularData.results,
              ...topRatedData.results,
              ...upcomingData.results,
            ];
            setAllMoveData(mergedData);
            setIsLoading(false);
          } else {
            throw new Error("Failed to fetch movie data");
          }
        }
      } catch (error) {
        alert("Failed to fetch data. Please try again later.");
        console.log("Error Fetching Data:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [currentPage, searchQuery, type]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className="home-container">
      <Header onSearchInputChange={setSearchQuery} />
      <div className="inside-container">
        <div className="movies-container">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Bars size={30} color="white" />
            </div>
          ) : (
            allMovieData.map((data, index) => (
              <MovieComponent
                key={`${data.id}_${type}_${index}`}
                movieData={data}
              />
            ))
          )}
        </div>
        <div className="pagination-container">
          <button onClick={handlePrevPage} className="pagination-button">
            Previous
          </button>
          <span className="cur-page-text">{currentPage}</span>
          <button onClick={handleNextPage} className="pagination-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
