import Image from "next/image";
import { getPokemonData } from "@/lib/utils";
import { getBase64 } from "@/lib/utils";

export async function PokemonCard({ name }: { name: string }) {
  const pokemonData = await getPokemonData(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
  );

//   const blurredPhoto = await getBase64(
//     pokemonData.sprites.other["official-artwork"].front_default,
//   );

  return (
    <div className="flex h-40 w-40 flex-col items-center justify-center rounded-md bg-slate-200 p-2">
      <Image
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt={`${name} pokemon artwork`}
        width={80}
        height={80}
        // placeholder="blur"
        // blurDataURL={blurredPhoto}
      />
      <div className="font-roboto">{name}</div>
    </div>
  );
}
