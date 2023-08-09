import useSWR from "swr";
import { PokemonClient } from "pokenode-ts";
import { useState } from "react";

const api = new PokemonClient();
const ITEMS_PER_PAGE = 10;

export const List = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error, isLoading } = useSWR("pokemons", () =>
    api.listPokemons(ITEMS_PER_PAGE * pageIndex, ITEMS_PER_PAGE)
  );

  if (isLoading || error || !data) return null;
  return (
    <div>
      <p>{data.count}</p>
      <p>
        {data.results.map((r) => (
          <li key={r.name}>{r.name}</li>
        ))}
      </p>
    </div>
  );
};
