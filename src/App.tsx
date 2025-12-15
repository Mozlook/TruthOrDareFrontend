import { useState } from "react";
import CreateGame from "./components/CreateGame/CreateGame";
import {
  type GameState,
  type GameMode,
  type QuestionsPackage,
  type Scoreboard,
} from "./models/models";
import DisplayQuestion from "./components/DisplayQuestion/DisplayQuestion";
function App() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [gameMode, setGameMode] = useState<GameMode>("normal");
  const [questionPackage, setQuestionPackage] = useState<QuestionsPackage>({
    normal: false,
    hard: false,
    hardcore: false,
  });
  const [party, setParty] = useState<string[]>([]);
  const [scoreboard, setScoreboard] = useState<Scoreboard>([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-red-950 text-zinc-50 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md">
        {gameState === "menu" && (
          <CreateGame
            setGameState={setGameState}
            gameMode={gameMode}
            setGameMode={setGameMode}
            questionsPackge={questionPackage}
            setQuestionsPackage={setQuestionPackage}
            party={party}
            setParty={setParty}
            setScoreboard={setScoreboard}
          />
        )}

        {gameState === "game" && (
          <DisplayQuestion
            gameMode={gameMode}
            party={party}
            questionPackage={questionPackage}
            scoreboard={scoreboard}
            setScoreboard={setScoreboard}
          />
        )}

        {/* PROSTY PODGLĄD SCOREBOARD – tylko na debug */}
        {scoreboard.length > 0 && (
          <div className="mt-6 rounded-2xl border border-zinc-700 bg-black/60 px-4 py-3 text-xs text-zinc-200">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Scoreboard (debug)
            </div>
            <ul className="space-y-1.5">
              {scoreboard.map((entry, idx) => (
                <li
                  key={entry.player + idx}
                  className="flex items-center justify-between"
                >
                  <span className="font-medium text-zinc-100">
                    {entry.player}
                  </span>
                  <span className="flex gap-3">
                    <span className="tabular-nums">
                      score:{" "}
                      <span className="font-semibold">{entry.score}</span>
                    </span>
                    <span className="tabular-nums">
                      shots:{" "}
                      <span className="font-semibold">{entry.shots}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
