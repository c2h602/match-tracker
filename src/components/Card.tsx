import avatar from "../assets/avatar_global.png";

export default function Card({ match }) {
  const homeTeamPlayers = [...match.homeTeam.players];
  const awayTeamPlayers = [...match.awayTeam.players];

  return (
    <>
      <div className="card_team">
        <div className="team_card">
          <ul className="username-and-kills">
            {homeTeamPlayers.map((player) => (

              <div className="username-and-kills-wrapper">

                <div className="username">
                  <img src={avatar} />
                  <span>{player.username}</span>
                </div>

                <div className="kiils">
                  Убийств: {player.kills}
                </div>

              </div>
            ))}
          </ul>

          <div className="points-place-totalKills">
            <span>Points: +{match.homeTeam.points}</span>
            <span>Место: {match.homeTeam.place}</span>
            <span>Всего убийств: {match.homeTeam.total_kills}</span>
          </div>
        </div>
      </div>

      {/* <div className="awayTeam_card">
        <div className="card_team">
          <ul className="username-and-kills">
            {awayTeamPlayers.map((player) => (
              <div className="username">
                <img src={avatar} />
                <span>{player.username}</span>
                <div className="kiils">Убийств: {player.kills}</div>
              </div>
            ))}
          </ul>

          <div className="points-place-totalKills">
            <span>Points: +{match.awayTeam.points}</span>
            <span>Место: {match.awayTeam.place}</span>
            <span>Всего убийств: {match.awayTeam.totalKills}</span>
          </div>
        </div>        
      </div> */}
    </>
  );
}
