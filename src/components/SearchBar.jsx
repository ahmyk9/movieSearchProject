import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = ({setSearchQuery}) => {
  const [searchItem, setSearchItem] = useState("");

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchItem === "testing") {
        navigate("/about");
      } 
      setSearchQuery(searchItem); // Trigger search on Enter key
    }
  };

  async function handleSearch() {
    if (searchItem === "testing") {
      navigate("/about");
    } 
      setSearchQuery(searchItem);
      console.log("buttons works");
  }

  return (
    <div className="p-5">
      <div className="h-10">
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-10 w-40"
          type="text"
          placeholder="Search..."
          />
        <button
          className="h-10 w-10 bg-black text-white"
          onClick={handleSearch}>
          Q
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
