export const UPPER_POKEMON_ID = 1;
export function getRandomPokemonID() {
  return Math.floor(Math.random() * UPPER_POKEMON_ID + 1);
}
