import React from "react";

const Search = () => {
  return (
    <div className="search">
      <i className="medium material-icons">search</i>
      <input
        style={{ border: "none", width: 80 }}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
