import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

//searchbar component showing in header section. Not done. 
function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="flex flex-row">
        <BiSearchAlt size={25}/>
        <input
          value={searchInput}
          type="text"
          placeholder="search.. "
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-2 ml-1 mr-6 border-2 h-min"
        />
      </div>
    </>
  );
}

export default Searchbar;
