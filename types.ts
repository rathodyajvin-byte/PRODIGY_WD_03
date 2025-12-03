export type Player = 'X' | 'O' | null;

export interface WinInfo {
  winner: Player;
  line: number[] | null;
  isDraw: boolean;
}

export type GameMode = 'PvP' | 'PvCPU';

export interface ScoreBoard {
  X: number;
  O: number;
  Draws: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: any;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  bgColor: string;
}

export interface Lap {
  id: number;
  time: number;
  split: number;
}