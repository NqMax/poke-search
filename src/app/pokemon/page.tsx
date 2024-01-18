import Image from "next/image";
import Illusion from "/public/illusion.webp";
import { SearchInput } from "@/components/searchInput";
import { PokemonContainer } from "@/components/pokemonContainer";

export default function PokemonHome({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <main className="container mt-5 p-2">
      <SearchInput />
      <PokemonContainer searchParams={searchParams} />
      <Image src={Illusion} alt="Pokémon Card Background" className="hidden" priority />
    </main>
  );
}
