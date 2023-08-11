import { useAppDispatch, useAppSelector } from "../../store";
import { setAbilities } from "../../store/slices/filter";
import Select from "react-select";
import { useAbilityList } from "../../utils/fetcher";
import { useMemo } from "react";

export const Filter = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useAbilityList(0, 1500);
  const options = useMemo(
    () => data?.results.map(({ name }) => ({ value: name, label: name })) ?? [],
    [data]
  );
  return (
    <div>
      <Select
        isMulti
        options={options}
        value={filter.abilities.map((a) => ({ value: a, label: a }))}
        onChange={(payload) =>
          dispatch(setAbilities(payload.map((p) => p.value)))
        }
      />
    </div>
  );
};
