import { Header } from "@/components/header";
import { CustomInput } from "@/components/customInput";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mt-2">
          <CustomInput />
      </main>
    </>
  );
}
