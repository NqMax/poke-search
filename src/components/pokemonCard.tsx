import Image from "next/image";
import PikachuSilhouette from "@/public/pikachu-silhouette.png";

export function PokemonCard({
  name,
  src,
}: {
  name: string;
  src: string | null;
}) {
  return (
    <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-md bg-neutral-600 p-2">
      <Image
        src={src || PikachuSilhouette}
        alt={`${name} pokemon artwork`}
        width={100}
        height={100}
      />
      <div className="text-center">{name}</div>
      <div className="cardShine absolute h-40 w-40"></div>
    </div>
  );
}
