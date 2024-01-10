import Image from "next/image";
import Illusion from "/public/illusion.webp";
import Logo from "/public/logo.svg";

export function Header() {
  return (
    <header className="border-b dark:border-neutral-600/50">
      <div className="container h-16 p-2">
        <Image src={Logo} alt="Pokémon Logo" className="h-full w-fit" />
        <Image src={Illusion} alt="Pokémon Logo" className="hidden" priority/>
      </div>
    </header>
  );
}
