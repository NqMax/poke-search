import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <div className="flex flex-col gap-y-2">
      <Label htmlFor="pokemon-search" className="">
        Search for a Pokémon!
      </Label>
      <Input id="pokemon-search" placeholder="Search Pokémon..."/>
    </div>
  );
}
