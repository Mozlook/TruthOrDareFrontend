import type { Question, GameMode } from "../../models/models";

type Props = {
  party: string[];
  activePlayer: number;
  gameMode: GameMode;
  question: Question;
  DrawQuestion: () => void;
};

const QuestionCard: React.FC<Props> = ({
  party,
  activePlayer,
  gameMode,
  question,
  DrawQuestion,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {gameMode === "party" && party.length > 0 && (
        <div className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Tryb imprezowy
        </div>
      )}

      <p className="text-lg sm:text-xl text-center leading-relaxed text-zinc-50 min-h-[140px] flex items-center justify-center">
        {question.text || "Kliknij „Następne pytanie”, żeby zaczynać!"}
      </p>
      {question.penalty === 1 ? (
        <p className="text-lg sm:text-xl text-center leading-relaxed text-zinc-50 flex items-center justify-center">
          Kara: {question.penalty} shot
        </p>
      ) : (
        <p className="text-lg sm:text-xl text-center leading-relaxed text-zinc-50 flex items-center justify-center">
          Kara: {question.penalty} shoty
        </p>
      )}

      <button
        type="button"
        onClick={DrawQuestion}
        className="mt-2 w-full rounded-2xl border border-red-500 bg-gradient-to-r from-red-600 to-red-500 py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-red-900/40 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Następne pytanie
      </button>
    </div>
  );
};

export default QuestionCard;
