"use client";
import { useState, useEffect } from "react";
import { isScrollable } from "@/lib/utils";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonCardFallback } from "@/components/fallbacks";
import { Loader } from "@/components/loader";
import { AddButton } from "@/components/addButton";
import { getPokemon } from "@/lib/serverActions";
import type { Pokemon } from "@/lib/types";

export function PokemonContainer() {
  const [pokemonData, setPokemonData] = useState<Pokemon>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [scrollable, setScrollable] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon(offset);
      setPokemonData([...pokemonData, ...data]);
      setLoading(false);
    }
    setScrollable(isScrollable());
    fetchData();
  }, [offset]);
  
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      offset < 1300
    ) {
      setLoading(true);
      setOffset((prev) => prev + 20);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <>
      <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
        {pokemonData[0]
          ? pokemonData.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                src={pokemon.sprite}
              />
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
      {loading && <Loader />}
    </>
  );
}
