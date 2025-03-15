import refresh from '../assets/Refresh.png';
import ErrorContent from './ErrorContent';
import { useMatchStore } from "../useMatchStore";

export default function Header() {
  const fetchMatches = useMatchStore((state) => state.fetchMatches);
  const error = useMatchStore((state) => state.error);

  return (
    <div className="header__container">
      <h1>Match Tracker</h1>

      <div className="update-content">
        {error && <ErrorContent />}
        
        <button onClick={fetchMatches} className='updateBtn'>
          Обновить <img src={refresh}/>
        </button>
      </div>
    </div>
  );
}
