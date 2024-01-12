"use server";
import { pokemon } from "./pokemon";

export async function getPokemon(offset: number) {
  if (offset == 0) {
    return pokemon.slice(0, 50);
  }
  return pokemon.slice(offset, offset + 50);
}
