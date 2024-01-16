import { pokemon } from "@/lib/pokemon";

function getRandomPokemon() {
  return pokemon[Math.floor(Math.random() * 1282)];
}

export function getRandomPokemonArray() {
  console.log(pokemon.length)
  return Array(7)
    .fill(0)
    .map(() => {
      return getRandomPokemon();
    });
}
