import { getRandomPokemonID } from "./getRandomPokemonID";

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
  return pokemons;
}
