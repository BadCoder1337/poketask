import { usePokemon } from "../../utils/fetcher";

type ItemProps = {
  name: string;
};

export const Item = ({ name }: ItemProps) => {
  const { data, error, isLoading } = usePokemon(name);

  if (isLoading || error || !data) return <li>Loading...</li>;
  return (
    <li>
      {data.id} {data.name} {data.height}
    </li>
  );
};
