import { useEffect, useState } from "react";
import { fetchPokemons } from "./functions/fetchPokemons";

function Card({ pokemon }) {
  console.log({ pokemon });
  return (
    <div className="card-container">
      <div className="wrapper">
        <div className="card-img-container">{pokemon.pokeName}</div>
        <div className="card-pk-name">
          <img src={pokemon.image} alt="pokemon" />
        </div>
      </div>
    </div>
  );
}

function CardsContainer() {
  useEffect(() => {
    const fetchAndSetPokemons = async () => {
      const Pokemons = await fetchPokemons();
      setPokemons(Pokemons);
    };
    fetchAndSetPokemons();
  }, []);
  const [selected, setSelected] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="cards-grid">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.reactID} pokemon={pokemon} />
      ))}
    </div>
  );
}
export default CardsContainer;
