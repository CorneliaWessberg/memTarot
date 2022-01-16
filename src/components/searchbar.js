import React, { useState, useEffect } from "react";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div>
        <input
          value={searchInput}
          type="text"
          placeholder="search.."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </>
  );
}

export default Searchbar;
