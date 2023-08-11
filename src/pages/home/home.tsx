import { Filter } from "../../components/filter";
import {
  AbilityList,
  FilteredPokemonList,
  PokemonList,
} from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useAppSelector } from "../../store";

export const HomePage = () => {
  const pagination = useAppSelector((state) => state.pagination);
  const filter = useAppSelector((state) => state.filter);

  return (
    <div>
      Pokemon list
      <Filter />
      {/* <AbilityList />
      <div style={{ display: "none" }}>
        <AbilityList index={pagination.index + 1} />
      </div> */}
      {filter.abilities.length ? (
        <FilteredPokemonList />
      ) : (
        <>
          <PokemonList />
          <div style={{ display: "none" }}>
            <PokemonList index={pagination.index + 1} />
          </div>
        </>
      )}
      <Pagination />
    </div>
  );
};
