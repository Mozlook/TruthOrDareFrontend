import { useEffect, useState } from "react";
import type {
  GameMode,
  GameState,
  QuestionsPackage,
  Scoreboard,
  ScoreEntry,
} from "../../models/models";
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
  setScoreboard: React.Dispatch<React.SetStateAction<Scoreboard>>;
};

const CreateGame: React.FC<Props> = ({
  gameMode,
  questionsPackge,
  party,
  setGameState,
  setGameMode,
  setQuestionsPackage,
  setParty,
  setScoreboard,
}) => {
  const [error, setError] = useState<string>("");
  function StartGame() {
    if (gameMode === "party" && party.length === 0) {
      setError("Ekipa nie moze być pusta!");
    } else if (
      questionsPackge.normal !== false ||
      questionsPackge.hard !== false ||
      questionsPackge.hardcore !== false
    ) {
      setGameState("game");
    } else {
      setError("Wybierz zestaw pytań!!!!");
    }
  }

  useEffect(() => {
    const newScoreboard = party.map((player) => {
      const entry: ScoreEntry = { player: player, score: 0, shots: 0 };
      return entry;
    });
    setScoreboard(newScoreboard);
  }, [party]);

  return (
    <section className="rounded-3xl bg-black/80 border border-red-700/60 shadow-[0_0_30px_rgba(239,68,68,0.35)] backdrop-blur-sm px-5 py-6 sm:px-6 sm:py-7 space-y-6">
      <header className="text-center space-y-1">
        <p className="text-[11px] uppercase tracking-[0.35em] text-red-400/80">
          Nie masz psychy
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50">Ustawienia gry</h1>
      </header>

      <div className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Tryb gry
        </h2>
        <GameModePicker
          gameMode={gameMode}
          setGameMode={setGameMode}
          setParty={setParty}
        />
      </div>

      {gameMode === "party" && (
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Gracze
          </h2>
          <PartyCreator party={party} setParty={setParty} />
        </div>
      )}

      <div className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Pakiety pytań
        </h2>
        <QuestionsPackagePicker
          questionsPackage={questionsPackge}
          setQuestionPackage={setQuestionsPackage}
          setError={setError}
        />
      </div>
      <div className="flex justify-center">
        {error != "" && <p className="text-red-600 font-semibold">{error}</p>}
      </div>
      <button
        type="button"
        onClick={StartGame}
        className="mt-2 w-full rounded-2xl border border-red-500 bg-gradient-to-r from-red-600 to-red-500 py-3.5 text-base font-semibold tracking-wide text-white shadow-lg shadow-red-900/40 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Start
      </button>
    </section>
  );
};

export default CreateGame;
