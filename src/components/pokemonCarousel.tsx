import Image from "next/image";
import Pikachu from "/public/pikachu.svg";
import { CarouselPokemonCard } from "@/components/carouselPokemonCard";
import { getRandomPokemonArray } from "@/lib/functions";

export function PokemonCarousel() {
  const pokemon = getRandomPokemonArray();
  return (
    <section className="relative">
      <Image
        src={Pikachu}
        alt="Pikachu Figurine"
        height={80}
        className="absolute -top-[5rem] right-0 -z-10"
      />
      <div className="relative flex h-72 w-[18.5rem] items-center overflow-hidden rounded-md before:absolute before:left-0 before:z-10 before:h-full before:w-52 before:rounded-l-md before:bg-gradient-to-l before:from-transparent before:to-neutral-800 after:absolute after:right-0 after:z-10 after:h-full after:w-52 after:rounded-r-md after:bg-gradient-to-r after:from-transparent after:to-neutral-800 sm:w-[520.09px] md:w-[704px] lg:w-[960px] xl:w-[1040.17px] dark:bg-neutral-800">
        <div className="slide mr-2 flex gap-x-2">
          {pokemon.map((pokemon) => (
            <CarouselPokemonCard
              key={pokemon.name}
              name={pokemon.name}
              src={pokemon.sprite}
            />
          ))}
        </div>
        <div className="slide flex gap-x-2">
          {pokemon.map((pokemon) => (
            <CarouselPokemonCard
              key={pokemon.name}
              name={pokemon.name}
              src={pokemon.sprite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
