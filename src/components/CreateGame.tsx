import type { GameMode, GameState, QuestionsPackage } from "../models/models";
import GameModePicker from "./GameModePicker";
import PartyCreator from "./PartyCreator";
import QuestionsPackagePicker from "./QuestionsPackagePicker";

type Props = {
  gameMode: GameMode;
  questionsPackge: QuestionsPackage;
  party: string[];
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setGameMode: React.Dispatch<React.SetStateAction<GameMode>>;
  setQuestionsPackage: React.Dispatch<React.SetStateAction<QuestionsPackage>>;
  setParty: React.Dispatch<React.SetStateAction<string[]>>;
};
const CreateGame: React.FC<Props> = ({
  gameMode,
  questionsPackge,
  party,
  setGameState,
  setGameMode,
  setQuestionsPackage,
  setParty,
}) => {
  function StartGame() {
    setGameState("game");
  }
  return (
    <div className="border-black border-4 flex flex-col items-center">
      Ustawienia Gry
      <GameModePicker gameMode={gameMode} setGameMode={setGameMode} />
      {gameMode === "party" && (
        <PartyCreator party={party} setParty={setParty} />
      )}
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
