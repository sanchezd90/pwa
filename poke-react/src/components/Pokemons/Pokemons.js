import React from "react";
import useGet from "./../../utils/useHttp";
import Pokemon from "./Pokemon";
import Loading from "./../Loading/Loading";

const Pokemons = () => {
  const [pokemons, isLoading, error] = useGet({
    url: "https://pokeapi.co/api/v2/pokemon",
  });
  return (
    <>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <Loading />
          ) : ( !error &&
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
