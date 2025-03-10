import Image from "next/image";
import PikachuSilhouette from "@/public/pikachu-silhouette.png";

export function PokemonCardFallback() {
  return (
    <div className="relative flex h-40 w-40 animate-pulse flex-col items-center justify-center rounded-md bg-neutral-600 p-2">
      <Image
        src={PikachuSilhouette}
        width={100}
        height={100}
        alt="pokemon placeholder"
        priority
      />
      <div className="cardShine absolute h-40 w-40"></div>
    </div>
  );
}
