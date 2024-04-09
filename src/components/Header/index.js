import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";

function Header({ onSearchInputChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearchInputChange(searchQuery);
  };

  const toggleHamburger = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="header-container">
      <div className="header-inside-cont">
        <Link to="/" className="link-items">
          <h1 className="header-title">MovieDB</h1>
        </Link>
        <div className="header-elements-cont">
          <ul className="header-li-items">
            <Link
              to="/popular"
              className={`link-items ${
                location.pathname === "/popular" && "active"
              }`}
            >
              <li className="li-items">Popular</li>
            </Link>
            <Link
              to="/top-rated"
              className={`link-items ${
                location.pathname === "/top-rated" && "active"
              }`}
            >
              <li className="li-items">TopRated</li>
            </Link>
            <Link
              to="/upcoming"
              className={`link-items ${
                location.pathname === "/upcoming" && "active"
              }`}
            >
              <li className="li-items">Upcoming</li>
            </Link>
          </ul>
          <div className={`search-container ${showSearch ? "show" : ""}`}>
            <input
              type="text"
              placeholder="Search for a movie, tv show,..... "
              className="input-search"
              onChange={handleInputChange}
              value={searchQuery}
            />
            <button
              type="button"
              className="search-button"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
        <div className="hamburger-icon">
          {showSearch && (
            <div className="header-hamburger-cont">
              <ul className="header-li-items">
                <Link
                  to="/popular"
                  className={`link-items ${
                    location.pathname === "/popular" && "active"
                  }`}
                >
                  <li className="li-items">Popular</li>
                </Link>
                <Link
                  to="/top-rated"
                  className={`link-items ${
                    location.pathname === "/top-rated" && "active"
                  }`}
                >
                  <li className="li-items">TopRated</li>
                </Link>
                <Link
                  to="/upcoming"
                  className={`link-items ${
                    location.pathname === "/upcoming" && "active"
                  }`}
                >
                  <li className="li-items">Upcoming</li>
                </Link>
              </ul>
              <div className={`search-container ${showSearch ? "show" : ""}`}>
                <input
                  type="text"
                  placeholder="Search for a movie, tv show,..... "
                  className="input-search"
                  onChange={handleInputChange}
                  value={searchQuery}
                />
                <button
                  type="button"
                  className="search-button"
                  onClick={handleSearchClick}
                >
                  Search
                </button>
              </div>
            </div>
          )}
          {showSearch ? (
            <AiOutlineClose size={25} onClick={toggleHamburger} />
          ) : (
            <GiHamburgerMenu size={25} onClick={toggleHamburger} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
