import type { QuestionsPackage } from "../models/models";
import GameModePicker from "./GameModePicker";
import QuestionsPackagePicker from "./QuestionsPackagePicker";

type Props = {
    gameState: string;
    setGameState: React.Dispatch<React.SetStateAction<string>>;
    gameMode: string;
    setGameMode: React.Dispatch<React.SetStateAction<string>>;
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
        setGameState("started");
    }
    return (
        <div className="border-black border-4 flex flex-col items-center">
            CreateGame
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
