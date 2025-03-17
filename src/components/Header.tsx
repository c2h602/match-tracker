import refresh from "../assets/Refresh.png";
import ErrorContent from "./ErrorContent";
import { useMatchStore } from "../useMatchStore";

export default function Header() {
  const fetchMatches = useMatchStore((state) => state.fetchMatches);
  const error = useMatchStore((state) => state.error);
  const setFilter = useMatchStore((state) => state.setFilter);

  return (
    <div className="header__container">
      <div className="title-status-wrapper">
        <h1>Match Tracker</h1>

        <select
          name="status"
          onChange={(e) => setFilter(e.target.value)}>
          <option value="">Все статусы</option>
          <option value="Ongoing">Live</option>
          <option value="Finished">Finished</option>
          <option value="Scheduled">Match preparing</option>
        </select>
      </div>

      <div className="update-content">
        {error && <ErrorContent />}

        <button onClick={fetchMatches} className="updateBtn">
          Обновить <img src={refresh} />
        </button>
      </div>
    </div>
  );
}
