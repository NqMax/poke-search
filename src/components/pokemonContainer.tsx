"use client";
import { useState, useEffect, useRef } from "react";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonCardFallback } from "@/components/fallbacks";
import { getPokemon, getPokemonByName } from "@/lib/serverActions";
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
  const [pokemonData, setPokemonData] = useState<Pokemon>([]);
  const [offset, setOffset] = useState(0);
  const [dataExists, setDataExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonByName(query, offset);
      setPokemonData((prev) => [...prev, ...data]);
      setLoading(false);
      if (data.length === 0) {
        setDataExists(false);
      } else {
        setDataExists(true);
      }
    }
    fetchData();
  }, [offset]);

  useEffect(() => {
    setOffset(0);
    async function fetchData() {
      const data = await getPokemonByName(query, 0);
      setPokemonData(data);
      setLoading(false);
      if (data.length === 0) {
        setDataExists(false);
      } else {
        setDataExists(true);
      }
    }
    fetchData();
  }, [query]);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          setOffset((prev) => prev + 50);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      },
    );
    dataExists && observer.observe(containerRef.current!);
    return () => observer.disconnect();
  }, [pokemonData]);

  return (
    <>
      {/* <div className="flex flex-wrap gap-x-2 gap-y-2 place-content-center"> */}
      <div className="relative my-3 grid grid-cols-[repeat(auto-fill,_10rem)] place-content-center gap-x-2 gap-y-2">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} src={pokemon.sprite} />
        ))}
        {dataExists && (
          <div
            className="absolute bottom-36 h-12 w-full"
            ref={containerRef}
          ></div>
        )}
      </div>
      {loading && <Loader />}
    </>
  );
}
