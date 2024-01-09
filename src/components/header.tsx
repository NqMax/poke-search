import Image from "next/image";
import Logo from "/public/logo.svg";

export function Header() {
  return (
    <header className="bg-red-600">
      <div className="container p-2 h-16">
        <Image src={Logo} alt="Pokémon Logo" className="h-full w-fit" />
      </div>
    </header>
  );
}
