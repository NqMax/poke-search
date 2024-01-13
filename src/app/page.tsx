import Image from "next/image";
import Pikachu from "/public/pikachu.svg";

export default function Home() {
  return (
    <main className="container flex h-[calc(100vh-4.063rem)] items-center justify-center p-2">
      <div className="flex w-fit flex-col gap-y-20">
        {/* Title */}
        <section className="flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-center text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Welcome to the Pokémon Experience
          </h1>
          <h2 className="text-center text-sm tracking-tight text-neutral-400 md:text-lg lg:text-xl">
            Discover, explore, and learn about Pokémon in a whole new way.
          </h2>
        </section>
        {/* Container */}
        <div className="relative h-72 rounded-md dark:bg-neutral-800">
          <Image
            src={Pikachu}
            alt="Pikachu Figurine"
            height={80}
            className="absolute -top-[5rem] right-0 -z-10"
          />
        </div>
      </div>
    </main>
  );
}
