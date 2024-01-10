"use client";
import { useState, useEffect, Suspense } from "react";
import { getPokemonData } from "@/lib/utils";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonCardFallback } from "@/components/fallbacks";

export function PokemonContainer() {
  const [pokemonData, setPokemonData] = useState({
    next: true,
    results: [],
  });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonData(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`,
      );
      setPokemonData({
        ...data,
        results: [...pokemonData.results, ...data.results],
      });
    }
    pokemonData.next && fetchData();
  }, [offset]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      console.log("bottom");
      setOffset((prev) => prev + 40);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2 w-full">
      {pokemonData.results[0]
        ? pokemonData.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} />
          ))
        : Array(30)
            .fill(0)
            .map((_, index) => <PokemonCardFallback key={index} />)}
    </div>
  );
}
