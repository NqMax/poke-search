import { pokemonList } from "@/lib/pokemon";

function getRandomPokemon() {
  return pokemonList[Math.floor(Math.random() * 1282)];
}

export function getRandomPokemonArray() {
  return Array(7)
    .fill(0)
    .map(() => {
      return getRandomPokemon();
    });
}
