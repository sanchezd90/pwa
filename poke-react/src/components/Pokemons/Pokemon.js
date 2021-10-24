import React from "react";
import useGet from "./../../utils/useHttp";
import Loading from "./../Loading/Loading";

const Pokemon = ({ name, url }) => {
  const [pokemon, isLoading] = useGet({
    url: url,
  });
  return (
    <div className="col-4 mt-3" key={name}>
      <div className="card">
        {isLoading ? (
          <Loading />
        ) : (
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
          </>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
