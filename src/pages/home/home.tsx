import { useEffect } from "react"
import { Filter } from "../../components/filter"
import { FilteredPokemonList, PokemonList } from "../../components/list"
import { Pagination } from "../../components/pagination"
import { useAppDispatch, useAppSelector } from "../../store"
import { reset } from "../../store/slices/pagination"
import { HomeContainer } from "./styled"

export const HomePage = () => {
  const pagination = useAppSelector(state => state.pagination)
  const filter = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(reset())
  }, [filter.abilities.length, dispatch])

  return (
    <HomeContainer>
      Pokedex
      <Filter />
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
    </HomeContainer>
  )
}
