import React, { useEffect, useState } from "react";

import Scores from "./Components/Scores";
import Scoreboard from "./Components/Scoreboard";


import { NameProvider } from "./Components/Context/NameContext";
import { ScoreProvider } from "./Components/Context/ScoreContext";
import { TimerProvider } from "./Components/Context/TimerContext";
import { PlayerProvider } from "./Components/Context/PlayerContext";

import "./App.scss";
import { CustomisationProvider } from "./Components/Context/CustomisationContext";

import webCG from "./Components/Context/webcg";

function App() {
  const [showScores, setShowScores] = useState(true);
  const [showScoreboard, setShowScoreboard] = useState(false);

  webCG.on('data', (data) =>{
    if (data.type == "toggle_scores"){
      toggleScores();
    }else if (data.type == "toggle_scoreboard"){
      toggleScoreboard();
    }
  })

  const toggleScores = () => {
    setShowScores(!showScores);
  };

  const toggleScoreboard = () => {
    setShowScoreboard(!showScoreboard);
  };


  return (
    <div className="App">
      <CustomisationProvider>
        {/*<button onClick={toggleScoreboard}>Click me</button>*/}
        <NameProvider>
          <ScoreProvider>
            <TimerProvider>
              <Scores visible={showScores} />
            </TimerProvider>
            <PlayerProvider>
              {/*<Scoreboard showScoreboard={showScoreboard} />*/}
            </PlayerProvider>
          </ScoreProvider>
          {/*//Title Card*/}
        </NameProvider>
      </CustomisationProvider>
    </div>
  );
}

export default App;
