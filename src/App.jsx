import NavBar from "./components/NavBar";
import axios from "axios";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MoviesPage from "./pages/MoviesPage";

function App() {
  async function movieSearch() {
    //  https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1

    axios
      .get(`https://api.themoviedb.org/3/movie/movie_id?language=en-US`)
      .then((response) => {
        console.log("response worked");
      })
      .catch((error) => console.log("error:" + `${error}`));
  }

  return (
    <>
      <Router>
        {/* This is a component that doesnt need routing */}
        <NavBar></NavBar>
        <button
          className="border border-black bg-black text-white rounded-md px-2"
          onClick={movieSearch}>
          fetch
        </button>
        {/* These are pages that need routing */}
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/moviespage" element={<MoviesPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
