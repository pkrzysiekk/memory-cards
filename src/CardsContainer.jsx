import { useEffect, useState } from "react";
import { fetchPokemons } from "./functions/fetchPokemons";

function Card() {
  return (
    <div className="card-container">
      <div className="wrapper">
        <div className="card-img-container"></div>
        <div className="card-pk-name"></div>
      </div>
    </div>
  );
}

function CardsContainer() {
  useEffect(() => {
    fetchPokemons();
  });
  const [selected, setSelected] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return <div className="cards-grid"></div>;
}
export default CardsContainer;
