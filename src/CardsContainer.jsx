import { useEffect, useState } from "react";
import { fetchPokemons } from "./functions/fetchPokemons";

function Card({ pokemon, onClick }) {
  return (
    <div className="card-container" onClick={() => onClick(pokemon.id)}>
      <div className="wrapper">
        <div className="card-img-container">
          <img src={pokemon.image} alt="pokemon" />
        </div>
        <div className="card-pk-name"> {pokemon.pokeName}</div>
      </div>
    </div>
  );
}

function CardsContainer() {
  let [selected, setSelected] = useState([]);
  let [pokemons, setPokemons] = useState([]);
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);

  const handleClick = (pokemonID) => {
    if (!selected.includes(pokemonID)) {
      setCurrentScore((prevScore) => prevScore + 1);
      currentScore > bestScore ? setBestScore(currentScore) : null;
      setSelected([...selected, pokemonID]);
    } else {
      setCurrentScore(0);
      setSelected([]);
    }
    console.log(`current ${currentScore} best ${bestScore}`);
    console.log(selected);
  };

  useEffect(() => {
    const fetchAndSetPokemons = async () => {
      const Pokemons = await fetchPokemons();
      setPokemons(Pokemons);
    };
    fetchAndSetPokemons();
  }, [selected]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  return (
    <div className="cards-grid">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.reactID} pokemon={pokemon} onClick={handleClick} />
      ))}
    </div>
  );
}
export default CardsContainer;
