import React from "react";

const MovieCard = ({ name, image, date }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl hover:cursor-pointer">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={`${name} Poster`}
      />
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">Release Date: {date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
