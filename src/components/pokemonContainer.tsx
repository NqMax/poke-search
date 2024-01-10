"use client";
import { useState, useEffect } from "react";
import { getPokemonData, isScrollable } from "@/lib/utils";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonCardFallback } from "@/components/fallbacks";
import { Loader } from "@/components/loader";
import { AddButton } from "@/components/addButton";

export function PokemonContainer() {
  const [pokemonData, setPokemonData] = useState({
    next: true,
    results: [],
  });
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [scrollable, setScrollable] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonData(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
      );
      setPokemonData({
        ...data,
        results: [...pokemonData.results, ...data.results],
      });
      setLoading(false);
    }
    setScrollable(isScrollable());
    pokemonData.next && fetchData();
  }, [offset]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setOffset((prev) => prev + 20);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="mt-3 flex w-full flex-wrap content-center justify-between gap-x-2 gap-y-2 after:grow after:basis-40">
        {pokemonData.results[0]
          ? pokemonData.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} name={pokemon.name} />
            ))
          : Array(20)
              .fill(0)
              .map((_, index) => <PokemonCardFallback key={index} />)}
      </div>
      {scrollable || (
        <AddButton
          onClick={() => {
            setScrollable(true);
            setLoading(true);
            setOffset((prev) => prev + 20);
          }}
        />
      )}
      {loading && pokemonData.next && <Loader />}
    </>
  );
}
