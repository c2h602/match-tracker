import { create } from 'zustand';

interface Player {
  username: string;
  kills: number;
}
  
interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}
  
interface Match {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: 'Scheduled' | 'Ongoing' | 'Finished';
}
  
interface ApiResponse {
  ok: boolean;
  data: {
  matches: Match[];
  };
}
  
interface MatchStore {
  matches: Match[];
  error: boolean;
  fetchMatches: () => Promise<void>;
}
  
  export const useMatchStore = create<MatchStore>((set) => ({
    matches: [],
    error: false,
  
    fetchMatches: async () => {
      try {
        const response = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
  
        const json: ApiResponse = await response.json();
        
        set({ matches: json.data.matches }); 
      } catch (error) {
        console.error('Ошибка загрузки матчей:', error);
        set({ error: true });
      }
    },
  }));