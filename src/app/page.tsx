import Image from "next/image";
import Illusion from "/public/illusion.webp";
import { PokemonCarousel } from "@/components/pokemonCarousel";

export default function Home() {
  return (
    <main className="container flex min-h-[calc(100vh-4.063rem)] items-center justify-center p-8">
      <div className="flex flex-col items-center gap-y-28">
        {/* Title */}
        <section className="flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-center text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Welcome to the Pokémon Experience
          </h1>
          <h2 className="text-center text-sm tracking-tight text-neutral-400 md:text-lg lg:text-xl">
            Discover, explore, and learn about Pokémon in a whole new way.
          </h2>
        </section>
        <PokemonCarousel />
      </div>
      <Image
        src={Illusion}
        alt="Pokémon Card Background"
        className="hidden"
        priority
      />
    </main>
  );
}
