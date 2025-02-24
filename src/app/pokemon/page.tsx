import { SearchInput } from "@/components/searchInput";
import { PokemonContainer } from "@/components/pokemonContainer";

export default async function PokemonHome(
  props: {
    searchParams?: Promise<{
      query?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  return (
    <main className="container mt-5 p-2">
      <SearchInput />
      <PokemonContainer searchParams={searchParams} />
    </main>
  );
}
