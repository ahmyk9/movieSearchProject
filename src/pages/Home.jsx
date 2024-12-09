import React, {useEffect, useState} from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/ui components/MovieCard";
import axios from "axios";

const Home = () => {
  const TMBD_API_KEY = process.env.REACT_APP_API_KEY;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Define at the top of the file

  const [moviesData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${TMBD_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
      )
      .then((response) => {
        console.log(response.data.results);
        // console.log(response.data);
        setMovieData(response.data.results);
      })
      .catch((error) => {
        console.log("error:" + `${error}`);
      });
  }, []);

  return (
    <div>

      <div className="mx-auto max-w-[1200px]">
      <h1 className="flex items-center justify-center ">
          New Movies that are out!
        </h1>

        <div className="flex items-center justify-center ">
          <SearchBar setSearchQuery={setSearchQuery}
          ></SearchBar>
        </div>


        <div className="grid ">

        {moviesData?.map((movieData) => (
          <MovieCard
          key={movieData.id}
          name={movieData.original_title}
          date={movieData.release_date}
          image={`${IMAGE_BASE_URL}${movieData.backdrop_path}`}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
