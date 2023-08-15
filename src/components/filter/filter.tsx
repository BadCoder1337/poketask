import { useMemo } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../store";
import { setAbilities } from "../../store/slices/filter";
import { useAbilityList } from "../../utils/fetcher";

export const Filter = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const { data } = useAbilityList();
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
