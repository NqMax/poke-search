export function PokemonCardFallback() {
  return (
    <div className="flex h-40 w-40 animate-pulse flex-col items-center justify-center rounded-md bg-slate-200  p-2">
      <div className="h-20 w-20 rounded bg-slate-400" />
      <div className="mt-2 h-4 w-20 rounded-md bg-slate-400" />
    </div>
  );
}
