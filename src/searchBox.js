import React from "react";

const searchBox = ({searchfield,searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 bg-lightest-blue"
        type="search"
        placeholder="search robot friends"
        onChange={searchChange}
      />
    </div>
  );
};

export default searchBox;
