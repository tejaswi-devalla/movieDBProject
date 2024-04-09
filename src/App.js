import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import MovieDescription from "./components/MovieDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/popular" Component={Popular} />
        <Route exact path="/top-rated" Component={TopRated} />
        <Route exact path="/upcoming" Component={Upcoming} />
        <Route exact path="/movie/:id" Component={MovieDescription} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
