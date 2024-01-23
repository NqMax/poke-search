"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MdCatchingPokemon } from "react-icons/md";

export function HomeSearchInput() {
  const { push } = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const input = target.elements.namedItem("query") as HTMLInputElement;
    const query = input.value;

    if (query) {
      const params = new URLSearchParams();
      params.set("query", query);
      push(`/pokemon?${params.toString()}`);
    } else {
      push(`/pokemon`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-x-2 sm:w-96">
      <Input name="query" id="query" className="w-full" />
      <Button type="submit" variant="secondary">
        Search
        <MdCatchingPokemon className="ml-2 text-red-500" />
      </Button>
    </form>
  );
}
