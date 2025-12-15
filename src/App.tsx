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
    </div>
  );
}
export default App;
