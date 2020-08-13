import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import * as TheRacoons from "./components/assets/images/raccoon.png";
import * as TheSquirrels from "./components/assets/images/squirrel.png";
import * as TheBunnies from "./components/assets/images/bunny.png";
import * as TheHounds from "./components/assets/images/hound.png";

function App() {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: TheRacoons,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: TheSquirrels,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: TheBunnies,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: TheHounds,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
