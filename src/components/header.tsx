import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.svg";
import { NavMenu } from "@/components/navMenu";
import { ThemeButton } from "@/components/themeButton";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b backdrop-blur dark:border-neutral-600/50 dark:bg-neutral-950/60">
      <div className="container flex h-16 items-center justify-between p-2">
        <Link href="/" className="h-full">
          <Image
            src={Logo}
            alt="Pokémon Logo"
            className="h-full w-fit"
            priority
          />
        </Link>
        <NavMenu />
        <ThemeButton />
      </div>
    </header>
  );
}
