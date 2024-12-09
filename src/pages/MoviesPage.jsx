import React, {useEffect, useState} from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/ui components/MovieCard";
import axios from "axios";

const MoviesPage = () => {
  const TMBD_API_KEY = process.env.REACT_APP_API_KEY;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const [moviesData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);

  //Axios Method
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${TMBD_API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
  //     )
  //     .then((response) => {
  //       console.log(response.data.results);
  //       // console.log(response.data);
  //       setMovieData(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.log("error:" + `${error}`);
  //     });
  // }, [searchQuery]);

  // .then method

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${TMBD_API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
  //   )
  //     .then((response) => { // need this to make the resposne readable
  //       return response.json(); // must always return and yes you need both .then()
  //     })
  //     .then((data) => { //this .then will is response.json()
  //       setMovieData(data.results); //getting the results from the object that is reponse.json which is called data by me
  //     })
  //     .catch((error) => {
  //       alert("Error: " + error);
  //     });
  // }, [searchQuery]);

  // async/await method

  useEffect(() => {
    async function fetchMovieData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMBD_API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
      );
      const data = await response.json();

      if (response.ok) {
        setMovieData(data.results);
      } else {
        alert("error");
      }
    }

    fetchMovieData();
  }, [searchQuery]);

  return (
    <div>
      <div className="mx-auto max-w-[1200px]">
        <h1 className="flex items-center justify-center ">
          Search for Any Movie!
        </h1>
        <div className="flex items-center justify-center ">
          <SearchBar setSearchQuery={setSearchQuery}></SearchBar>
        </div>

        {searchQuery ? (
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
        ) : (
          <p className="text-center text-gray-500">No Movies Found</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
