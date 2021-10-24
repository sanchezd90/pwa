import React from "react";
import useGet from "./../../utils/useHttp";
import Pokemon from "./Pokemon";
import Loading from "./../Loading/Loading";

const Pokemons = () => {
  const [pokemons, isLoading] = useGet({
    url: "https://pokeapi.co/api/v2/pokemon",
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-info">Pokemon</h1>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            pokemons.results.map((pokemon) => (
              <Pokemon key={pokemon.name} {...pokemon} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Pokemons;
