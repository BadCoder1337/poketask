import { useAppSelector } from "../../store";
import { useFilteredPokemonList } from "../../utils/fetcher";
import { Pokemon } from "./Pokemon";

type ListProps = {
  index?: number;
};

export const FilteredPokemonList = ({ index }: ListProps) => {
  const pagination = useAppSelector((state) => state.pagination);
  const filter = useAppSelector((state) => state.filter);

  const { data, error, isLoading } = useFilteredPokemonList(
    filter.abilities,
    (index ?? pagination.index) * pagination.limit,
    pagination.limit
  );

  if (isLoading || error || !data) return null;
  return (
    <div>
      <p>
        {data.results.map(({ name }) => (
          <Pokemon key={name} name={name}></Pokemon>
        ))}
      </p>
    </div>
  );
};
