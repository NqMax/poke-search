"use client";
import { useState, useEffect, useRef } from "react";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonCardFallback } from "@/components/fallbacks";
import { getPokemon } from "@/lib/serverActions";
import { Loader } from "@/components/loader";
import type { Pokemon } from "@/lib/types";

export function PokemonContainer({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const [pokemonData, setPokemonData] = useState<Pokemon>({
    next: null,
    pokemon: [],
  });
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon(query, 0);
      setPokemonData(data);
      setLoading(false);
    }
    fetchData();
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon(query, pokemonData.next);
      setPokemonData({
        ...data,
        pokemon: [...pokemonData.pokemon, ...data.pokemon],
      });
      setLoading(false);
    }

    let observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          fetchData();
        }
      },
      {
        threshold: 0.5,
      },
    );

    pokemonData.next && observer.observe(containerRef.current!);

    return () => observer.disconnect();
  }, [pokemonData]);

  return (
    <>
      {/* <div className="flex flex-wrap gap-x-2 gap-y-2 place-content-center"> */}
      <div className="relative my-3 grid grid-cols-[repeat(auto-fill,_10rem)] place-content-center gap-x-2 gap-y-2">
        {pokemonData.pokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            src={pokemon.sprite}
          />
        ))}
        {pokemonData.next && (
          <div
            className="absolute bottom-32 h-12 w-full"
            ref={containerRef}
          />
        )}
      </div>
      {loading && <Loader />}
    </>
  );
}
