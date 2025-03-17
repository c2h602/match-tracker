import role from "../assets/illustrations_role.png";
import arrowDown from "../assets/arrow_down.png";
import arrowUp from "../assets/arrow_up.png";
import Card from "./Card";
import { useState } from "react";
import Status from "./Status";
import type { Match } from "../useMatchStore";

interface MatchProps {
  match: Match;
}

export default function Match({ match }: MatchProps) {
  const [show, setShow] = useState(false);

  function openCard() {
    setShow((prev) => !prev);
  }

  return (
    <div className="match__container">

      <div className="match-card-wrapper">

        <div className="wrapper">

          <div className="match-wrapper">
            <div className="team-1">
              <img src={role} />
              <span>{match.homeTeam.name}</span>
            </div>

            <div className="score-and-status">
              <div className="score">
                <span>
                  {match.homeScore} : {match.awayScore}
                </span>
              </div>

              <Status status={match.status} />
            </div>

            <div className="team-2">
              <img src={role} />
              <span>{match.awayTeam.name}</span>
            </div>
          </div>

          <button className="arrowDownBtn" onClick={openCard}>
            <img src={show ? arrowUp : arrowDown} />
          </button>
        </div>

        <div>{show && <Card match={match} />}</div>
      </div>
    </div>
  );
}
