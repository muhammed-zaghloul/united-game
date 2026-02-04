
export enum View {
  LOGIN = 'LOGIN',
  LANDING = 'LANDING',
  PROFILE_SELECTION = 'PROFILE_SELECTION',
  PROFILE_EVALUATION = 'PROFILE_EVALUATION',
  LEADERBOARD = 'LEADERBOARD',
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD'
}

export enum UserRole {
  ADMIN = 'ADMIN',
  PARTICIPANT = 'PARTICIPANT'
}

export interface TeamState {
  name: string;
  goldCoins: number;
  silverCoins: number;
  role: UserRole;
  completedProfiles: string[];
}

export interface RubricLevel {
  score: number;
  description: string;
}

export interface RubricCategory {
  name: string;
  levels: Record<number, string>;
}

export interface ProfileData {
  id: string;
  name: string;
  avatar: string;
  traits: string[];
  job: string;
  age: number;
  experience: string;
  correctAnswers: {
    knowledge: number;
    skills: number;
    attitude: number;
  };
}
