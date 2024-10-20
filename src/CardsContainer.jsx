import { useState } from "react";

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
  [selected, setSelected] = useState([]);
  [currentScore, setCurrentScore] = useState(0);
  [bestScore, setBestScore] = useState(0);

  return <div className="cards-grid"></div>;
}
