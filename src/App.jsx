import NavBar from "./components/NavBar";
import axios from "axios";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MoviesPage from "./pages/MoviesPage";
import {useEffect} from "react";

function App() {

  const TMBD_API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {}, []);


  async function movieSearch() {
    axios
      .get(`https://api.themoviedb.org/3/movie/550?api_key=${TMBD_API_KEY}`)
      .then((response) => {
        // console.log("response is working");
        // console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error:" + `${error}`);
      });
  }

  return (
    <>
      <Router>
        
        {/* This is a component that doesnt need routing */}
        <NavBar></NavBar>


        {/* <button
          className="border border-black bg-black text-white rounded-md px-2"
          onClick={movieSearch}>
          fetch
        </button> */}



        {/* These are pages that need routing */}
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/moviespage" element={<MoviesPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
