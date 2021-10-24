import React, { useState } from "react";
import Pokemons from "./components/Pokemons/Pokemons";

function App() {
  return (
    <>
      <div className="row mt-5 justify-content-center">
        <Pokemons />
      </div>
    </>
  );
}

export default App;
