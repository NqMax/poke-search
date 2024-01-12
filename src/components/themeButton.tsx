import { RxMoon } from "react-icons/rx";
import { Button } from "@/components/ui/button";

export function ThemeButton() {
  return (
    <Button variant="ghost" size="icon">
      <RxMoon className="h-5 w-5"/>
    </Button>
  );
}
