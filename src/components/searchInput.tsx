"use client";
import Image from "next/image";
import Eevee from "/public/wobbuffet.svg";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    // Instantiate a new URLSearchParams object with the current search params in order to access other than read only methods.
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mx-auto mb-6 flex flex-col items-center gap-y-12 sm:gap-y-6">
      <h1 className="text-center text-3xl font-bold tracking-tight md:max-w-none max-w-[21.5rem]">
        Discover the World of Pokémon
      </h1>
      <div className="relative w-full xl:w-3/5">
        <Input
          id="pokemon-search"
          placeholder="Search for a Pokémon..."
          className="peer"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Image
          src={Eevee}
          alt="Wobbuffet Figurine"
          height={80}
          className="absolute -top-[3rem] right-0 -z-10 transition-all sm:peer-focus:-top-[5rem]"
          priority
        />
      </div>
    </div>
  );
}
