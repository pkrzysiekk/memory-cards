import { pokemonList } from "../assets/pokemonList";
import { getRandomPokemonID } from "./getRandomPokemonID";
import { v4 as uuidv4 } from "uuid";

export async function fetchPokemons() {
  let pokemonIDs = [];

  let pokemons = [];
  for (let i = 0; i < 12; i++) {
    pokemonIDs.push(getRandomPokemonID());
  }
  const promises = pokemonIDs.map(async (id) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return promise.json();
  });
  pokemons = await Promise.all(promises);
  console.log(pokemons);
  pokemons = pokemons.map((pokemon) => ({
    id: pokemon.id,
    pokeName: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    reactID: uuidv4(),
  }));

  return pokemons;
}
