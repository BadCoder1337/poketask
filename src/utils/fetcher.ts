import { setupCache } from "axios-cache-interceptor";
import axios from "axios";
import useSWR from "swr";
import type { Ability, NamedAPIResourceList, Pokemon } from "pokenode-ts";

const api = setupCache(
  axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
      "Content-Type": "application/json",
    },
  })
);
api.interceptors.request.use();

const fetcher =
  <T>() =>
  (url: string) =>
    api.get<T>(url).then((res) => res.data);

const usePokemonList = (offset = 0, limit = 20) =>
  useSWR(
    `/pokemon?offset=${offset}&limit=${limit}`,
    fetcher<NamedAPIResourceList>()
  );

const usePokemon = (name: string) =>
  useSWR(`/pokemon/${name}`, fetcher<Pokemon>());

const useAbility = (name: string) =>
  useSWR(`/ability/${name}`, fetcher<Ability>());

const useAbilityList = (offset = 0, limit = 20) =>
  useSWR(
    `/ability?offset=${offset}&limit=${limit}`,
    fetcher<NamedAPIResourceList>()
  );

export default fetcher;
export { usePokemonList, usePokemon, useAbilityList, useAbility };
