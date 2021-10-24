import React, { useState } from "react";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemon from "./components/Pokemons/Pokemon";
import SearchBar from "./components/Search/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState();

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
      <div className="row mt-5 justify-content-center">
        <div className="col-12">
          <h1 className="text-center text-info">Pokemon</h1>
        </div>
        <SearchBar handleSearch={handleSearch}/>
        <div>
          {searchTerm ? <Pokemon name={searchTerm} url={`https://pokeapi.co/api/v2/pokemon/${searchTerm}`}/> : <Pokemons />}
        </div>
      </div>
    </>
  );
}

export default App;
