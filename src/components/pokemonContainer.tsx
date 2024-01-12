"use client";
import { useState, useEffect, useRef } from "react";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonCardFallback } from "@/components/fallbacks";
import { getPokemon } from "@/lib/serverActions";
import type { Pokemon } from "@/lib/types";

export function PokemonContainer() {
  const [pokemonData, setPokemonData] = useState<Pokemon>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon(offset);
      setPokemonData([...pokemonData, ...data]);
      setLoading(false);
    }
    fetchData();
  }, [offset]);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        console.log("s")
        if (entries[0].isIntersecting && offset < 1250) {
          setLoading(true);
          setOffset((prev) => prev + 50);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      },
    );
    pokemonData[0] && observer.observe(containerRef.current!);
    return () => observer.disconnect();
  }, [pokemonData]);

  return (
    <>
      <div className="my-3 flex flex-wrap gap-x-2 gap-y-2">
        {pokemonData[0]
          ? pokemonData.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                src={pokemon.sprite}
              />
            ))
          : Array(50)
              .fill(0)
              .map((_, index) => <PokemonCardFallback key={index} />)}
        {loading &&
          Array(50)
            .fill(0)
            .map((_, index) => <PokemonCardFallback key={index} />)}
      </div>
      {pokemonData[0] && <div className="h-12 w-full" ref={containerRef}></div>}
    </>
  );
}
