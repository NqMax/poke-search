import Image from "next/image";
import Logo from "/public/logo.svg";

export function Header() {
  return (
    <header className="border-b dark:border-neutral-600/50">
      <div className="container p-2 h-16">
        <Image src={Logo} alt="Pokémon Logo" className="h-full w-fit" />
      </div>
    </header>
  );
}
