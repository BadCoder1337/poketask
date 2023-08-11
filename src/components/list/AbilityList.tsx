import { useAppSelector } from "../../store";
import { useAbilityList } from "../../utils/fetcher";
import { Ability } from "./Ability";

type ListProps = {
  index?: number;
};

export const AbilityList = ({ index }: ListProps) => {
  const pagination = useAppSelector((state) => state.pagination);

  const { data, error, isLoading } = useAbilityList(
    (index ?? pagination.index) * pagination.limit,
    pagination.limit
  );

  if (isLoading || error || !data) return null;
  return (
    <div>
      <p>
        {data.results.map(({ name }) => (
          <Ability key={name} name={name}></Ability>
        ))}
      </p>
    </div>
  );
};
