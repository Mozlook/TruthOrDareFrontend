import type { GameMode } from "../models/models";

type Props = {
  gameMode: GameMode;
  setGameMode: React.Dispatch<React.SetStateAction<GameMode>>;
  setParty: React.Dispatch<React.SetStateAction<string[]>>;
};
const GameModePicker: React.FC<Props> = ({ setGameMode, setParty }) => {
  function SetGameMode(gameMode: GameMode) {
    setGameMode(gameMode);
    setParty([]);
  }
  return (
    <div className="border-1 flex gap-4">
      <button
        type="button"
        className="m-2 border-1"
        onClick={() => SetGameMode("normal")}
      >
        Zwykła
      </button>

      <button
        type="button"
        className="m-2 border-1"
        onClick={() => SetGameMode("party")}
      >
        Impreza
      </button>
    </div>
  );
};
export default GameModePicker;
