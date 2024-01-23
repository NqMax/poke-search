import Link from "next/link";
import { RxMoon } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
export function ThemeButton() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link
        href="https://github.com/NqMax/poke-search"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="h-5 w-5" />
      </Link>
    </Button>
  );
}
