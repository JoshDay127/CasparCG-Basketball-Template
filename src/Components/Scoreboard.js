import React, { useContext } from "react";

import { useSpring, useTrail, animated } from "react-spring";
import { PlayerContext } from "./Context/PlayerContext";
import "../App.scss";
import { usePalette } from "react-palette";

import PlayerList from "./PlayerList";

import scorchers from "../img/Surrey_Scorchers.png";
import { NameContext } from "./Context/NameContext";
import { CustomisationContext } from "./Context/CustomisationContext";

const Scoreboard = ({ showScoreboard }) => {
  const players = useContext(PlayerContext);
  const customisation = useContext(CustomisationContext);

  return (
    <animated.div className="container Scoreboard">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, ${customisation.ScoreboardGradientPrimary} , ${customisation.ScoreboardGradientSecondary})`,
        }}
      >
        <div className="row header">
          <div className="col-8">
            <img
              src={scorchers}
              className="float-left"
              style={{ transform: "scale(0.9)", paddingTop: "15px" }}
            />
          </div>
          <div className="col-4">Sponsor</div>
        </div>

        <div className="row" style={{ back: 0.8 }}>
          <div className="col">
            <PlayerList
              players={players.homePlayers}
              showScoreboard={showScoreboard}
              team="Home"
            />
          </div>
          <div className="col">
            <PlayerList
              players={players.visitorPlayers}
              showScoreboard={showScoreboard}
              team="Visitor"
            />
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Scoreboard;
