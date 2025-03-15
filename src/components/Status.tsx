import { Match } from "../useMatchStore";
import classNames from 'classnames';

interface StatusProps {
  status: Match["status"];
}

export default function Status({ status }: StatusProps) {
  const className = classNames("button", {
    "live-status": status === "Ongoing",
    "finished-status": status === "Finished",
    "waiting-status": status === "Scheduled",
  });


  return (
    <>
      <button className={className}>
        {status === "Ongoing" && "Live"}
        {status === "Finished" && "Finished"}
        {status === "Scheduled" && "Match preparing"}
      </button>
    </>
  );
}
