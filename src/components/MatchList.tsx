import Match from "./Match";
import { useState, useEffect } from "react";
import { useMatchStore } from "../useMatchStore";
import Skeleton from "./Skeleton";


export default function MatchList() {
  const matches = useMatchStore((state) => state.matches);
  const fetchMatches = useMatchStore((state) => state.fetchMatches);
  const [isLoading, setIsLoading] = useState(true);
  const filter = useMatchStore((state) => state.filter);

  useEffect(() => {
    // fetchMatches();
    fetchMatches().then(() => setIsLoading(false));
  }, []);

  const filteredMatches = matches.filter((match) =>
    filter === "" ? true : match.status === filter
  );

  return (
    // <ul className="match-list__container">
    //   {matches.map((match) => (
    //     <Match key={match.time} match={match} />
    //   ))}
    // </ul>
    <ul className="match-list__container">
      {isLoading ? (
        <Skeleton />
      ) : (
        filteredMatches.map((match) => <Match key={match.time} match={match} />)
      )}
    </ul>
  );
}
