import React, { useState } from "react";

const Searchbar = ({ addNewQuery }) => {
  const [picQuery, setPicQuery] = useState("");

  const queryFormChange = ({ target: { value } }) => setPicQuery(value);

  const queryFormSubmit = (e) => {
    e.preventDefault();
    addNewQuery(picQuery);
  };

  return (
    <>
      <header className="searchbar">
        <form className="form" onSubmit={queryFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={queryFormChange}
            value={picQuery}
          />
        </form>
      </header>
    </>
  );
};
export default Searchbar;
