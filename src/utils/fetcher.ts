import { setupCache } from "axios-cache-interceptor";
import axios from "axios";
import useSWR from "swr";
import {
  Ability,
  NamedAPIResourceList,
  Pokemon,
  PokemonClient,
} from "pokenode-ts";

const api = setupCache(
  axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
      "Content-Type": "application/json",
    },
  })
);
api.interceptors.request.use();

const pokemonClient = new PokemonClient();

const fetcher =
  <T>() =>
  (url: string) =>
    api.get<T>(url).then((res) => res.data);

const useList = (resource: string, offset = 0, limit = 20) =>
  useSWR(
    `${resource}?offset=${offset}&limit=${limit}`,
    fetcher<NamedAPIResourceList>()
  );

const usePokemonList = (offset?: number, limit?: number) =>
  useList("/pokemon", offset, limit);

const usePokemon = (name: string) =>
  useSWR(`/pokemon/${name}`, fetcher<Pokemon>());

const useAbility = (name: string) =>
  useSWR(`/ability/${name}`, fetcher<Ability>());

const useAbilityList = (offset = 0, limit = 2000) =>
  useList("/ability", offset, limit);

const useFilteredPokemonList = (abilities: string[], offset = 0, limit = 20) =>
  useSWR(
    [`/pokemon?offset=${offset}&limit=${limit}`, ...abilities],
    async () => {
      let pokemons: string[] = [];
      for (const ability of abilities) {
        if (offset + limit <= pokemons.length) break;
        const abilityPokemons = await pokemonClient
          .getAbilityByName(ability)
          .then((a) => a.pokemon.map((p) => p.pokemon.name));
        pokemons = [...new Set(abilityPokemons.concat(pokemons))];
      }
      return {
        count: 0,
        next: "",
        previous: "",
        results: pokemons
          .slice(offset, limit + offset)
          .map((name) => ({ name, url: "" })),
      } as NamedAPIResourceList;
    }
  );

export default fetcher;
export {
  usePokemonList,
  usePokemon,
  useAbilityList,
  useAbility,
  useFilteredPokemonList,
};
