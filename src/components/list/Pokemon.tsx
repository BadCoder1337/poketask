import { usePokemon } from "../../utils/fetcher";

type PokemonProps = {
  name: string;
};

export const Pokemon = ({ name }: PokemonProps) => {
  const { data, error, isLoading } = usePokemon(name);

  if (isLoading || error || !data) return <li>Loading...</li>;
  return (
    <li>
      <img
        alt={""}
        src={data.sprites.other?.dream_world.front_default ?? undefined}
        width={32}
        height={32}
      ></img>
      <span>{data.name}</span>
    </li>
  );
};
