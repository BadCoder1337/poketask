import { useAbility } from "../../utils/fetcher";

type AbilityProps = {
  name: string;
};

export const Ability = ({ name }: AbilityProps) => {
  const { data, error, isLoading } = useAbility(name);

  if (isLoading || error || !data) return <li>Loading...</li>;
  return (
    <li>
      {data.id} {data.name} {data.pokemon.map((p) => p.pokemon.name).join(", ")}
    </li>
  );
};
