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

export function NavMenu() {
  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link
              href="/pokemon"
            >
              Pokemon
            </Link>
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
            <div className="flex p-6">
              <div className="flex w-48 flex-col gap-y-2 rounded-md bg-neutral-800 p-6">
                <MdOutlineCatchingPokemon className="text-red-500" />
                <div className="text-lg font-medium">Poke/Search</div>
                <p className="text-sm leading-tight text-neutral-400 ">
                  Search, discover, and learn about your favorite Pokémon. Find
                  detailed information, including stats, abilities, types, and
                  evolutions.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
