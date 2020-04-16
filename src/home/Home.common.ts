export interface IPokemon {
  name: string;
}

export interface IPokemonListResult {
  count: number;
  next: string;
  previous: string;
  results: Pick<IPokemon, 'name'>[];
}
