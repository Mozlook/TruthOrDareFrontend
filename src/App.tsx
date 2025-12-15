import { useState } from "react";
import CreateGame from "./components/CreateGame/CreateGame";
import type { GameState, GameMode, QuestionsPackage } from "./models/models";
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
          />
        )}

        {gameState === "game" && (
          <DisplayQuestion
            gameMode={gameMode}
            party={party}
            questionPackage={questionPackage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
