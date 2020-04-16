import { IPokemonListResult } from "./Home.common";

const fetchData = async (): Promise<IPokemonListResult> => {
  const pokemonApi: string = process.env.POKEMON_API as string;
  const rawResponse = await fetch(pokemonApi);
  const response = await rawResponse.json();
  return response;
};

export default fetchData;
