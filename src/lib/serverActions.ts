"use server";
import { pokemonList } from "./pokemon";

export async function getPokemon(query: string, offset: number | null) {
  if (offset === null) {
    return {
      next: null,
      pokemon: [],
    };
  }

  const filteredPokemon =
    query === ""
      ? pokemonList
      : pokemonList.filter((poke) =>
          poke.name.toLowerCase().includes(query.toLowerCase()),
        );

  const pokemon = filteredPokemon.slice(offset, offset + 50);
  return {
    next:
      filteredPokemon.slice(offset + 50, offset + 100).length === 0
        ? null
        : offset + 50,
    pokemon: pokemon,
  };
}
