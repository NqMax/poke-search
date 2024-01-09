import { Suspense } from "react";
import { getPokemonData } from "@/lib/utils";
import { PokemonCardFallback } from "@/components/fallbacks";
import { PokemonCard } from "@/components/pokemonCard";

export async function PokemonContainer() {
  const data = await getPokemonData(
    "https://pokeapi.co/api/v2/pokemon?offset=160&limit=20",
  );
    
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {data.results.map((pokemon) => (
        <Suspense key={pokemon.name} fallback={<PokemonCardFallback />}>
          <PokemonCard name={pokemon.name} />
        </Suspense>
      ))}
      <PokemonCardFallback />
    </div>
  );
}
