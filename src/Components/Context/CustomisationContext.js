import React, { useEffect, useState } from "react";

export const CustomisationContext = React.createContext(null);

export const CustomisationProvider = ({ children }) => {
  //Creating team name States
  const [ScoreboardTeamColour, setScoreboardTeamColor] = useState();
  const [ScoreboardGradientPrimary, setScoreboardGradientPrimary] = useState(
    "#323764"
  );
  const [
    ScoreboardGradientSecondary,
    setScoreboardGradientSecondary,
  ] = useState("#1f2141");
  const [playerNumberHighlight, setPlayerNumberHighlight] = useState("#5e625e");

  const contextValue = {
    ScoreboardTeamColour,
    ScoreboardGradientPrimary,
    ScoreboardGradientSecondary,
    playerNumberHighlight,
  };
  //variables to make accessible through useContext

  //Returning context provider
  return (
    <CustomisationContext.Provider value={contextValue}>
      {children}
    </CustomisationContext.Provider>
  );
};
