import Match from "./Match";
import { useEffect } from "react";
import { useMatchStore } from "../useMatchStore";

export default function MatchList() {
  const matches = useMatchStore((state) => state.matches);
  const fetchMatches = useMatchStore((state) => state.fetchMatches);

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <ul className="match-list__container">
      {matches.map((match) => (
        <Match key={match.time} match={match} />
      ))}
    </ul>
  );
}
