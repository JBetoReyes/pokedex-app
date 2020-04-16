import React from 'react';
import { IPokemon } from './Home.common';

const generatePokemonList = (pokemons: IPokemon[]) => {
  return pokemons.map((pokemon) => {
    return <li>{pokemon.name}</li>;
  });
};

export default generatePokemonList;
