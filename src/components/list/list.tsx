import { useAppSelector } from "../../store";
import { usePokemonList } from "../../utils/fetcher";
import { Item } from "./item";

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
        {data.results.map(({ name }) => (
          <Item key={name} name={name}></Item>
        ))}
      </p>
    </div>
  );
};
