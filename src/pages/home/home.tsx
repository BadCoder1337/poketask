import { useEffect } from "react";
import { Filter } from "../../components/filter";
import {
  AbilityList,
  FilteredPokemonList,
  PokemonList,
} from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useAppDispatch, useAppSelector } from "../../store";
import { reset } from "../../store/slices/pagination";

export const HomePage = () => {
  const pagination = useAppSelector((state) => state.pagination);
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [filter.abilities.length, dispatch]);

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
