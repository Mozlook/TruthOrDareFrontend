export type QuestionsPackage = {
  normal: boolean;
  hard: boolean;
  hardcore: boolean;
};

export type Question = {
  text: string;
  penalty: number;
};

export type GameMode = "normal" | "party";

export type GameState = "menu" | "game" | "scoreboard";

export type ScoreEntry = {
  player: string;
  score: number;
  shots: number;
};

export type Scoreboard = ScoreEntry[];
