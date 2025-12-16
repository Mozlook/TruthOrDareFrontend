import { useState } from "react";
import CreateGame from "./components/CreateGame/CreateGame";
import {
  type GameState,
  type GameMode,
  type QuestionsPackage,
  type Scoreboard,
} from "./models/models";
import DisplayQuestion from "./components/DisplayQuestion/DisplayQuestion";
import ScoreboardComponent from "./components/Scoreboard/Scoreboard";
import InfoBox from "./components/InfoBox/InfoBox";
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
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-red-950 text-zinc-50 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setIsInfoOpen(true)}
            className="flex justify-center mb-4 w-[12%] px-5 py-3 rounded-2xl border border-red-700/60 bg-black/80 
               text-red-200 
               shadow-[0_0_18px_rgba(239,68,68,0.45)]
               hover:bg-red-600/10 hover:text-red-300 
               active:scale-95 
               transition"
          >
            <span className="text-lg">?</span>
          </button>
        </div>
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
            setGameState={setGameState}
            party={party}
            questionPackage={questionPackage}
            scoreboard={scoreboard}
            setScoreboard={setScoreboard}
          />
        )}
        {gameState === "scoreboard" && (
          <ScoreboardComponent
            scoreboard={scoreboard}
            setGameState={setGameState}
          />
        )}
      </div>
      {isInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <InfoBox onClose={() => setIsInfoOpen(false)} />
        </div>
      )}
    </div>
  );
}
export default App;
