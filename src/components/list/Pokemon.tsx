import { usePokemon } from "../../utils/fetcher"
import { PokemonSkeleton } from "./PokemonSkeleton"
import { PokemonContainer } from "./styled"

type PokemonProps = {
  name: string
}

export const Pokemon = ({ name }: PokemonProps) => {
  const { data, error, isLoading } = usePokemon(name)

  if (isLoading || error || !data) return <PokemonSkeleton />
  return (
    <PokemonContainer>
      <img
        alt={""}
        src={data.sprites.other?.dream_world.front_default ?? undefined}
      ></img>
      <div>name: {data.name}</div>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>order: {data.order}</div>
      <div>base xp: {data.base_experience}</div>
    </PokemonContainer>
  )
}
