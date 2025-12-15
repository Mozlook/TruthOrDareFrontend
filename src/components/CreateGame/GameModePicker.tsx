import type { GameMode } from "../../models/models";

type Props = {
  gameMode: GameMode;
  setGameMode: React.Dispatch<React.SetStateAction<GameMode>>;
  setParty: React.Dispatch<React.SetStateAction<string[]>>;
};

const GameModePicker: React.FC<Props> = ({
  gameMode,
  setGameMode,
  setParty,
}) => {
  function SetGameMode(mode: GameMode) {
    setGameMode(mode);
    setParty([]);
  }

  const baseButton =
    "flex-1 py-2.5 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] active:translate-y-[1px]";
  const activeButton =
    "bg-red-600/90 border-red-500 text-white shadow-md shadow-red-900/40";
  const inactiveButton =
    "bg-zinc-900/70 border-zinc-700 text-zinc-200 hover:bg-zinc-900";

  return (
    <div className="flex gap-3">
      <button
        type="button"
        className={`${baseButton} ${
          gameMode === "normal" ? activeButton : inactiveButton
        }`}
        onClick={() => SetGameMode("normal")}
      >
        Zwykła
      </button>

      <button
        type="button"
        className={`${baseButton} ${
          gameMode === "party" ? activeButton : inactiveButton
        }`}
        onClick={() => SetGameMode("party")}
      >
        Impreza
      </button>
    </div>
  );
};

export default GameModePicker;
