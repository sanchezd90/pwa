import React, { useState } from "react";

const SearchBar = ({handleSearch}) => {
  const [term, setTerm] = useState("");

  const handleChange = (text) => {
    setTerm(text)
  }

  return (
    <form className="d-flex w-50">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Nombre"
        aria-label="Search"
        value={term}
        onChange={(e)=> handleChange(e.target.value)}
      />
      <button className="btn btn-outline-success" type="button" onClick={(e)=>handleSearch(term)}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
