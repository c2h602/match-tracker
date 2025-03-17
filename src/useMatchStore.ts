import { create } from 'zustand';

export interface Player {
  username: string;
  kills: number;
}
  
export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}
  
export interface Match {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: 'Scheduled' | 'Ongoing' | 'Finished';
}
  
export interface ApiResponse {
  ok: boolean;
  data: {
  matches: Match[];
  };
}
  
export interface MatchStore {
  matches: Match[];
  error: boolean;
  fetchMatches: () => Promise<void>;
  filter: string;
  setFilter: (filter: string) => void;
}
  
  export const useMatchStore = create<MatchStore>((set) => ({
    matches: [],
    error: false,
    filter: '',
  
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

    setFilter: (filter) => set({filter})
  }));