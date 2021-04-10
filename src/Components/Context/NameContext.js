import React, { useEffect, useState } from "react";
import webCG from "./webcg";

export const NameContext = React.createContext(null);

export const NameProvider = ({ children }) => {
  //Creating team name States
  const [homeName, setHomeName] = useState("HOME");
  const [homeShortName, setHomeShortName] = useState("HOME");
  const [visitorName, setVisitorName] = useState("VISITOR");
  const [visitorShortName, setVisitorShortName] = useState("VISITOR");

  webCG.on('data', (data) => {
    switch (data.type){
      case ("team-name-update"):
        if (data.payload.team === "homeTeam") {
          setHomeName(data.payload.name);
        } else if (data.payload.team === "visitorTeam") {
          setVisitorName(data.payload.name);
        }
        break;
      case ("team-shortname-update"):
        if (data.payload.team === "homeTeam") {
          setHomeShortName(data.payload.name);
        } else if (data.payload.team === "visitorTeam") {
          setVisitorShortName(data.payload.name);
        }
        break;
    }
  })

  //variables to make accessible through useContext
  const contextValue = {
    homeName,
    visitorName,
    homeShortName,
    visitorShortName,
  };

  //Returning context provider
  return (
    <NameContext.Provider value={contextValue}>{children}</NameContext.Provider>
  );
};
