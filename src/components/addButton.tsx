import { Button } from "@/components/ui/button";
import { MdCatchingPokemon } from "react-icons/md";

export function AddButton({ onClick }) {
  return (
    <Button variant="outline" className="mx-auto mt-4 flex" onClick={onClick}>
      Add More Pokémon <MdCatchingPokemon className="ml-2 text-red-500" />
    </Button>
  );
}
