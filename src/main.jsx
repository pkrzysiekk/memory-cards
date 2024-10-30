import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardsContainer from "./CardsContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardsContainer></CardsContainer>
  </StrictMode>
);
