import Image from "next/image";
import Logo from "/public/logo.svg";
import { NavMenu } from "@/components/navMenu";

export function Header() {
  return (
    <header className="border-b dark:border-neutral-600/50">
      <div className="container h-16 p-2 flex items-center">
        <Image src={Logo} alt="Pokémon Logo" className="h-full w-fit" />
        <NavMenu />
      </div>
    </header>
  );
}
