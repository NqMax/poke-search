"use server";
import { pokemon } from "./pokemon";

export async function getPokemon(offset: number) {
  if (offset == 0) {
    return pokemon.slice(0, 50);
  }
  return pokemon.slice(offset, offset + 50);
}

export async function getPokemonByName(query: string, offset: number) {
  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(query.toLowerCase()),
  );
  if (offset == 0) {
    return filteredPokemon.slice(0, 50);
  }
  return filteredPokemon.slice(offset, offset + 50);
}
