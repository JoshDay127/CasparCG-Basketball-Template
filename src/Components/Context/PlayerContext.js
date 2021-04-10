import React, { useEffect, useState } from "react";
import { NameContext } from "./NameContext";
import webCG from "./webcg";

export const PlayerContext = React.createContext(null);

//Returning context provider
export const PlayerProvider = ({ children }) => {
  const [homePlayers, setHomePlayers] = useState([
    { id: 1, name: "Player 1", number: 1 },
    { id: 2, name: "Player 2", number: 2 },
    { id: 3, name: "Player 3", number: 3 },
    { id: 4, name: "Player 4", number: 4 },
    { id: 5, name: "Player 5", number: 5 },
  ]);
  const [visitorPlayers, setVisitorPlayers] = useState([
    { id: 1, name: "Player 1", number: 1 },
    { id: 2, name: "Player 2", number: 2 },
    { id: 3, name: "Player 3", number: 3 },
    { id: 4, name: "Player 4", number: 4 },
    { id: 5, name: "Player 5", number: 5 },
  ]);

  webCG.on('data', (data)=>{
    switch (data.type){
      case "player-name-update":
        if (data.payload.team == "homeTeam"){
          let elementsIndex = homePlayers.findIndex(player => player.id == data.payload.playerID);
          let newPlayers = [...homePlayers];
          newPlayers[elementsIndex] = {...newPlayers[elementsIndex], number: data.payload.playerName}
          setHomePlayers(newPlayers)
        }else if (data.payload.team == "visitorTeam"){
          let elementsIndex = visitorPlayers.findIndex(player => player.id == data.payload.playerID);
          let newPlayers = [...visitorPlayers];
          newPlayers[elementsIndex] = {...newPlayers[elementsIndex], number: data.payload.playerName}
          setVisitorPlayers(newPlayers);
        }
        break;
      case "player-number-update":
        if (data.payload.team == "homeTeam"){
          let elementsIndex = homePlayers.findIndex(player => player.id == data.payload.playerID);
          let newPlayers = [...homePlayers];
          newPlayers[elementsIndex] = {...newPlayers[elementsIndex], number: data.payload.playerNumber}
          setHomePlayers(newPlayers)
        }else if (data.payload.team == "visitorTeam"){
          let elementsIndex = visitorPlayers.findIndex(player => player.id == data.payload.playerID);
          let newPlayers = [...visitorPlayers];
          newPlayers[elementsIndex] = {...newPlayers[elementsIndex], number: data.payload.playerNumber}
          setVisitorPlayers(newPlayers);
        }
        break;
      default:
        break;
    }
  })

  //variables to make accessible through useContext
  const contextValue = { homePlayers, visitorPlayers };
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
