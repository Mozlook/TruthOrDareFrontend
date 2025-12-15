import { useEffect } from "react";
import type {
  GameState,
  Scoreboard as ScoreboardType,
} from "../../models/models";

type Props = {
  scoreboard: ScoreboardType;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

const Scoreboard: React.FC<Props> = ({ scoreboard, setGameState }) => {
  useEffect(() => {
    if (!scoreboard.length) {
      setGameState("menu");
    }
  }, [scoreboard.length, setGameState]);

  if (!scoreboard.length) return null;

  return (
    <section className="mt-6 rounded-3xl bg-black/70 border border-zinc-700 shadow-[0_0_20px_rgba(0,0,0,0.6)] px-4 py-4 space-y-3">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            Wyniki gry
          </p>
        </div>
      </header>

      <ul className="space-y-1.5">
        {scoreboard.map((entry, idx) => (
          <li
            key={entry.player + idx}
            className="flex items-center justify-between rounded-2xl px-3 py-2 text-xs sm:text-sm transition bg-zinc-900/70 border border-zinc-700"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-zinc-100">{entry.player}</span>
            </div>

            <div className="flex items-center gap-3 text-[11px] sm:text-xs">
              <span className="rounded-full bg-zinc-800/80 px-2 py-0.5 tabular-nums text-zinc-200">
                score:{" "}
                <span className="font-semibold text-red-300">
                  {entry.score}
                </span>
              </span>
              <span className="rounded-full bg-zinc-800/80 px-2 py-0.5 tabular-nums text-zinc-200">
                shots:{" "}
                <span className="font-semibold text-red-300">
                  {entry.shots}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setGameState("menu")}
        className="mt-4 w-full rounded-2xl border border-red-500 bg-gradient-to-r from-red-600 to-red-500 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-red-900/40 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Powrót
      </button>
    </section>
  );
};

export default Scoreboard;
