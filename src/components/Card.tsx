import avatar from "../assets/avatar_global.png";

export default function Card({ match }) {
  const homeTeamPlayers = [...match.homeTeam.players];
  const awayTeamPlayers = [...match.awayTeam.players];

  return (
    <>
      <div className="card_wrapper">

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
                    <span>
                      Убийств:{" "}
                      <span className="response_data">{player.kills}</span>
                    </span>
                  </div>
                </div>
              ))}
            </ul>

            <div className="points-place-totalKills">
              <span>
                Points:
                <span className="response_data">+{match.homeTeam.points}</span>
              </span>
              <span>
                Место:
                <span className="response_data">{match.homeTeam.place}</span>
              </span>
              <span>
                Всего убийств:
                <span className="response_data">
                  {match.homeTeam.total_kills}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="card_team">
          <div className="team_card">
            <ul className="username-and-kills">
              {awayTeamPlayers.map((player) => (
                <div className="username-and-kills-wrapper">
                  <div className="username">
                    <img src={avatar} />
                    <span>{player.username}</span>
                  </div>

                  <div className="kiils">
                    <span>
                      Убийств:{" "}
                      <span className="response_data">{player.kills}</span>
                    </span>
                  </div>
                </div>
              ))}
            </ul>

            <div className="points-place-totalKills">
              <span>
                Points:
                <span className="response_data">+{match.awayTeam.points}</span>
              </span>
              <span>
                Место:
                <span className="response_data">{match.awayTeam.place}</span>
              </span>
              <span>
                Всего убийств:
                <span className="response_data">
                  {match.awayTeam.total_kills}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
