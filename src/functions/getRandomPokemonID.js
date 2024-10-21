export function getRandomPokemonID() {
  const UPPER_POKEMON_ID = 1025;
  return Math.floor(Math.random() * 1025 + 1);
}
