import { usePokemon } from "../../utils/fetcher";

type PokemonProps = {
  name: string;
};

export const Pokemon = ({ name }: PokemonProps) => {
  const { data, error, isLoading } = usePokemon(name);

  if (isLoading || error || !data) return <li>Loading...</li>;
  return (
    <li>
      {data.id} {data.name} {data.height}
    </li>
  );
};
