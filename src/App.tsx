import { useState } from "react";
import CreateGame from "./components/CreateGame";
import type { GameState, GameMode, QuestionsPackage } from "./models/models";

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
    <div className="flex justify-center min-h-screen ">
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
    </div>
  );
}

export default App;
