import React from "react";
import CardRow from "../src/card/CardRow";
import { cardList } from "../src/card/cardList";
import Carousel from "./carousel/Carousel";


function App() {
  return (
    <>
      <p className="display-6 d-flex justify-content-center">The Mandalorian</p>
      <Carousel />
      <CardRow cardList={cardList}/>      
    </>
  );
}

export default App;
