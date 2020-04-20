import React, { useState, useEffect } from 'react';
import SearchInput from '../common/components/search.input.component';
import { IPokemon } from './Home.common';
import '../../public/assets/styles/pages/_home.scss';
import fetchData from './Home.service';
import generatePokemonList from './Home.controller';

const Home = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  try {
    useEffect(() => {
      fetchData().then((response) => setPokemons(response.results));
    }, []);
  } catch {
    console.log('error happened');
  }
  return (
    <>
      <section className="search__section">
        <h2>Looking for a pokemon?</h2>
        <SearchInput placeHolder="Enter your pokemon..." />
      </section>
      <h1>Pokemon List</h1>
      <ol>{generatePokemonList(pokemons)}</ol>
    </>
  );
};

export default Home;
