import { MdCatchingPokemon } from "react-icons/md";

export function Loader() {
  return (
    <div className="mx-auto my-4 flex h-10 w-fit items-center gap-x-2 rounded-md border px-4 py-2 text-sm font-medium dark:border-neutral-800 dark:bg-neutral-950">
      Loading More Pokémon{" "}
      <MdCatchingPokemon className="animate-spin text-red-500" />
    </div>
  );
}
