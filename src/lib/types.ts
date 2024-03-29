export type Pokemon = {
  next: number | null;
  pokemon: (
    | {
        name: string;
        id: number;
        sprite: string;
        types: {
          slot: number;
          type: {
            name: string;
            url: string;
          };
        }[];
      }
    | {
        name: string;
        id: number;
        sprite: null;
        types: {
          slot: number;
          type: {
            name: string;
            url: string;
          };
        }[];
      }
  )[];
};
