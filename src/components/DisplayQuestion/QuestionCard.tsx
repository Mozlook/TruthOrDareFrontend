import type { Question, GameMode } from "../../models/models";

type Props = {
  party: string[];
  activePlayer: number;
  gameMode: GameMode;
  question: Question;
};

const QuestionCard: React.FC<Props> = ({
  party,
  activePlayer,
  gameMode,
  question,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {gameMode === "party" && party.length > 0 && (
        <>
          <div className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Tryb imprezowy
          </div>
          <div className="text-center text-xl font-semibold uppercase tracking-[0.25em] text-red-400">
            {party[activePlayer]}
          </div>
        </>
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
    </div>
  );
};

export default QuestionCard;
