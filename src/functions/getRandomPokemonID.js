export function getRandomPokemonID() {
  const UPPER_POKEMON_ID = 1025;
  return Math.floor(Math.random() * UPPER_POKEMON_ID + 1);
}
