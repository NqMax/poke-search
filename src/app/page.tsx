import { Header } from "@/components/header";
import { CustomInput } from "@/components/customInput";
import { PokemonContainer } from "@/components/pokemonContainer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mt-2">
        <CustomInput />
        <PokemonContainer />
      </main>
    </>
  );
}
