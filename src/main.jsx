import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardsContainer from "./CardsContainer";
import Score from "./Score";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardsContainer></CardsContainer>
    <Score></Score>
  </StrictMode>
);
