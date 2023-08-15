import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { usePokemonList } from "../../utils/fetcher"
import { Pokemon } from "./Pokemon"
import { setCount, setInfinite } from "../../store/slices/pagination"
import { ListContainer } from "./styled"
import { PokemonSkeleton } from "./PokemonSkeleton"

type ListProps = {
  index?: number
}

export const PokemonList = ({ index }: ListProps) => {
  const pagination = useAppSelector(state => state.pagination)
  const dispatch = useAppDispatch()

  const { data, error, isLoading } = usePokemonList(
    (index ?? pagination.index) * pagination.limit,
    pagination.limit
  )
  useEffect(() => {
    if (data) {
      dispatch(setCount(data.count))
      dispatch(setInfinite(false))
    }
  }, [data, dispatch])

  if (isLoading || error || !data)
    return (
      <ListContainer>
        {new Array(pagination.limit).fill(null).map((_, i) => (
          <PokemonSkeleton />
        ))}
      </ListContainer>
    )
  return (
    <ListContainer>
      {data.results.map(({ name }) => (
        <Pokemon key={name} name={name}></Pokemon>
      ))}
    </ListContainer>
  )
}
