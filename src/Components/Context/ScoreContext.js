import React, { useEffect, useState } from "react";
import webCG from "./webcg";

export const ScoreContext = React.createContext(null);

export const ScoreProvider = ({ children }) => {
  const [homeScore, setHomeScore] = useState(0);
  const [visitorScore, setVisitorScore] = useState(0);

  webCG.on('data', (data) => {
    if (data.type="score-update"){
      if (data.payload.team === "homeTeam") {
        setHomeScore(data.payload.score);
      } else if (data.payload.team === "visitorTeam") {
        setVisitorScore(data.payload.score);
      }
    }
  })

  const contextValue = {
    homeScore,
    visitorScore,
  };

  return (
    <ScoreContext.Provider value={contextValue}>
      {children}
    </ScoreContext.Provider>
  );
};
