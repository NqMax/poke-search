import { useState, useEffect } from "react";
import Image from "next/image";
import { getPokemonData } from "@/lib/utils";
import PikachuSilhouette from "/public/pikachu-silhouette.png";
import { PokemonCardFallback } from "@/components/fallbacks";

export function PokemonCard({ name }: { name: string }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const pokemonData = await getPokemonData(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      );
      setPokemonData(pokemonData);
    }
    fetchData();
  }, []);

  if (pokemonData) {
    return (
      <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-md bg-neutral-600 p-2">
        <Image
          src={pokemonData.sprites.front_default || PikachuSilhouette}
          alt={`${name} pokemon artwork`}
          width={100}
          height={100}
        />
        <div className="text-center">{name}</div>
        <div className="cardShine absolute h-40 w-40"></div>
      </div>
    );
  }

  return <PokemonCardFallback />;
}
