import Image from "next/image";
import Pikachu from "@/public/pikachu.svg";
import { CarouselPokemonCard } from "@/components/carouselPokemonCard";

const pokemon = [
  {
    name: "rayquaza",
    id: 384,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
  },
  {
    name: "greninja",
    id: 658,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
  },
  {
    name: "umbreon",
    id: 197,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
  },
  {
    name: "volcarona",
    id: 637,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
  },
  {
    name: "tyrantrum",
    id: 697,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
  },
  {
    name: "lugia",
    id: 249,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
  },
  {
    name: "salamence",
    id: 373,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
  },
];

export function PokemonCarousel() {
  return (
    <section className="relative">
      <Image
        src={Pikachu}
        alt="Pikachu Figurine"
        height={80}
        className="absolute -top-[5rem] right-0 -z-10"
        priority
      />
      <div className="relative shadow-md flex h-72 w-[18.5rem] items-center overflow-hidden rounded-md before:absolute before:left-0 before:z-10 before:h-full before:w-52 before:rounded-l-md before:bg-gradient-to-l before:from-transparent before:to-neutral-800 after:absolute after:right-0 after:z-10 after:h-full after:w-52 after:rounded-r-md after:bg-gradient-to-r after:from-transparent after:to-neutral-800 sm:w-[520.09px] md:w-[704px] lg:w-[960px] xl:w-[1040.17px] dark:bg-neutral-800">
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
