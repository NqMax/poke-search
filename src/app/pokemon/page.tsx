import Image from "next/image";
import Illusion from "/public/illusion.webp";
import { SearchInput } from "@/components/searchInput";
import { PokemonContainer } from "@/components/pokemonContainer";

export default function PokemonHome() {
  return (
    <main className="container mt-5 p-2">
      <SearchInput />
      <PokemonContainer />
      <Image src={Illusion} alt="Pokémon Logo" className="hidden" />
    </main>
  );
}
