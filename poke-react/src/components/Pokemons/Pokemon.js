import React from "react";
import useGet from "./../../utils/useHttp";
import Loading from "./../Loading/Loading";

const Pokemon = ({ name, url }) => {
  const [pokemon, isLoading, error] = useGet({
    url: url,
  });
  return (
    <div className="col-4 mt-3" key={name}>
      <div className="card">
        {isLoading && !error ? (
          <Loading />
        ) : ( !error ? (
          <>
            <img
              src={pokemon.sprites.front_default}
              alt={name}
              className="card-img-top w-50"              
            />
            <div className="card-body text-dark">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">
                Tipo: {pokemon.types.map((type) => type.type.name)}
              </p>
            </div>
          </>) : (
            <h3>Este Pokemón no fue encontrado</h3>
          )
        )}
      </div>
    </div>
  );
};

export default Pokemon;
