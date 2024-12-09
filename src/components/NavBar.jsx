import {FilmIcon} from "@heroicons/react/16/solid";
import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-auto max-w-[1200px] ">
      <nav className=" flex items-center justify-between border border-solid">
        <div className="p-2">
          <Link to="/">
            <FilmIcon className="w-8 h-8"></FilmIcon>
          </Link>
        </div>

        <div>
          <ul className="flex items-center content-center p-2">
            <Link to="/">
              <li className="px-2">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-2">About</li>
            </Link>
            <Link to="/moviespage">
              <li className="px-2">Movies</li>
            </Link>
          </ul>
        </div>
        
      </nav>
    </div>
  );
};

export default NavBar;
