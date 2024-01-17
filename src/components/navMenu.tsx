"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MdOutlineCatchingPokemon } from "react-icons/md";

function NavItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-col justify-center gap-y-1 rounded-md p-3 transition-colors hover:bg-neutral-800">
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-tight text-neutral-400">
        {children}
      </p>
    </li>
  );
}

export function NavMenu() {
  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/pokemon">Pokémon</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link
              href="https://github.com/NqMax/poke-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[30rem] grid-cols-[0.75fr_1fr] grid-rows-3 gap-3 p-6">
              <li className="row-span-3 flex flex-col justify-end rounded-md gap-y-px bg-neutral-800/80 p-6">
                <MdOutlineCatchingPokemon className="text-red-500" />
                <div className="text-lg font-medium mt-3">Poké Search</div>
                <p className="text-sm leading-tight text-neutral-400 ">
                  Search, discover, and learn about your favorite Pokémon. Find
                  stats, abilities, types, evolutions and more. Based on the
                  amazing PokéAPI.
                </p>
              </li>
              <NavItem title="PokéAPI">
                All the Pokémon data you will ever need in one place, easily
                accessible through a modern free open-source RESTful API.
              </NavItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
