import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getPlaiceholder } from "plaiceholder";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type PokemonApiUrl = `https://pokeapi.co/api/v2/pokemon${string}`;

export async function getPokemonData(url: PokemonApiUrl) {
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// export async function getBase64(imageUrl: string) {
//   try {
//     const res = await fetch(imageUrl);

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error("Failed to fetch image");
//     }

//     const buffer = await res.arrayBuffer();

//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));

//     return base64;
//   } catch (e) {
//     console.log(e);
//   }
// }
