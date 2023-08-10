import { useAppSelector } from "../../store";
import { usePokemonList } from "../../utils/fetcher";

type ListProps = {
  index?: number;
};

export const List = ({ index }: ListProps) => {
  const pagination = useAppSelector((state) => state.pagination);
  const { data, error, isLoading } = usePokemonList(
    (index ?? pagination.index) * pagination.limit,
    pagination.limit
  );

  if (isLoading || error || !data) return null;
  return (
    <div>
      <p>
        {data.results.map((r) => (
          <li key={r.name}>{r.name}</li>
        ))}
      </p>
    </div>
  );
};
