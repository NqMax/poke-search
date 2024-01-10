import Image from "next/image";
import { getPokemonData } from "@/lib/utils";
import { getBase64 } from "@/lib/util";
import PikachuSilhouette from "/public/pikachu-silhouette.png";

export async function PokemonCard({ name }: { name: string }) {
  const pokemonData = await getPokemonData(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
  );

  const blurredPhoto = await getBase64(pokemonData.sprites.front_default);

  return (
    <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-md bg-neutral-600 p-2">
      <Image
        src={pokemonData.sprites.front_default || PikachuSilhouette}
        alt={`${name} pokemon artwork`}
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL={blurredPhoto}
      />
      <div className="text-center">{name}</div>
      <div className="cardShine absolute h-40 w-40"></div>
    </div>
  );
}
