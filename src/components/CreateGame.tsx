import type { GameMode, GameState, QuestionsPackage } from "../models/models";
import GameModePicker from "./GameModePicker";
import QuestionsPackagePicker from "./QuestionsPackagePicker";

type Props = {
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  gameMode: GameMode;
  setGameMode: React.Dispatch<React.SetStateAction<GameMode>>;
  questionsPackge: QuestionsPackage;
  setQuestionsPackage: React.Dispatch<React.SetStateAction<QuestionsPackage>>;
};
const CreateGame: React.FC<Props> = ({
  setGameState,
  gameMode,
  setGameMode,
  questionsPackge,
  setQuestionsPackage,
}) => {
  function StartGame() {
    setGameState("game");
  }
  return (
    <div className="border-black border-4 flex flex-col items-center">
      Ustawienia Gry
      <GameModePicker gameMode={gameMode} setGameMode={setGameMode} />
      <QuestionsPackagePicker
        questionsPackage={questionsPackge}
        setQuestionPackage={setQuestionsPackage}
      />
      <button type="button" onClick={StartGame} className="border-1">
        Start
      </button>
    </div>
  );
};
export default CreateGame;
