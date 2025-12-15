import { useEffect, useMemo, useState } from "react";
import type {
  GameMode,
  Question,
  QuestionsPackage,
  Scoreboard,
} from "../../models/models";
import * as Questions from "../../resources/questions";
import * as Tasks from "../../resources/tasks";
import QuestionCard from "./QuestionCard";

type Props = {
  gameMode: GameMode;
  party: string[];
  questionPackage: QuestionsPackage;
  scoreboard: Scoreboard;
  setScoreboard: React.Dispatch<React.SetStateAction<Scoreboard>>;
};

const DisplayQuestion: React.FC<Props> = ({
  gameMode,
  party,
  questionPackage,
  scoreboard,
  setScoreboard,
}) => {
  const [activePlayer, setActivePlayer] = useState<number>(
    Math.floor(Math.random() * party.length),
  );
  const [question, setQuestion] = useState<Question>({ text: "", penalty: 0 });

  const questions = useMemo(() => {
    let q: Question[] = [];

    if (questionPackage.normal) {
      q = [...q, ...Questions.normalQuestions, ...Tasks.normalTasks];
    }
    if (questionPackage.hard) {
      q = [...q, ...Questions.hardQuestions, ...Tasks.hardTasks];
    }
    if (questionPackage.hardcore) {
      q = [...q, ...Questions.hardcoreQuestions, ...Tasks.hardcoreTasks];
    }

    return q;
  }, [questionPackage]);

  function DrawQuestion() {
    if (!questions.length) return;

    let nextActiveIndex = activePlayer;

    if (party.length > 0) {
      nextActiveIndex = (activePlayer + 1) % party.length;
      setActivePlayer(nextActiveIndex);
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const rawQuestion = questions[randomIndex];

    let text = rawQuestion.text;

    if (party.length > 1 && text.includes("{target}")) {
      const candidateIndexes = party
        .map((_, idx) => idx)
        .filter((idx) => idx !== nextActiveIndex);

      const randomTargetIndex =
        candidateIndexes[Math.floor(Math.random() * candidateIndexes.length)];

      const targetName = party[randomTargetIndex];

      text = text.replaceAll("{target}", targetName);
    } else if (party.length === 0) {
      text = text.replaceAll("{target}", "losowa osoba");
    }

    setQuestion({
      ...rawQuestion,
      text,
    });
  }

  function SkipQuestion() {
    if (!questions.length) return;

    const randomIndex = Math.floor(Math.random() * questions.length);
    const rawQuestion = questions[randomIndex];

    let text = rawQuestion.text;

    if (party.length > 1 && text.includes("{target}")) {
      const candidateIndexes = party
        .map((_, idx) => idx)
        .filter((idx) => idx !== activePlayer);

      const randomTargetIndex =
        candidateIndexes[Math.floor(Math.random() * candidateIndexes.length)];

      const targetName = party[randomTargetIndex];

      text = text.replaceAll("{target}", targetName);
    } else if (party.length === 0) {
      text = text.replaceAll("{target}", "losowa osoba");
    }

    setQuestion({
      ...rawQuestion,
      text,
    });
  }

  function ScoreUp() {
    setScoreboard(
      scoreboard.map((record, i) => {
        if (i === activePlayer) {
          return { ...record, score: record.score + 1 };
        } else return record;
      }),
    );
    DrawQuestion();
  }
  function DrinkUp() {
    setScoreboard(
      scoreboard.map((record, i) => {
        if (i === activePlayer) {
          return { ...record, shots: record.shots + question.penalty };
        } else return record;
      }),
    );
    DrawQuestion();
  }

  useEffect(() => {
    DrawQuestion();
  }, [questions.length]);

  return (
    <section className="rounded-3xl bg-black/80 border border-red-700/60 shadow-[0_0_30px_rgba(239,68,68,0.35)] backdrop-blur-sm px-5 py-6 sm:px-6 sm:py-7">
      <QuestionCard
        party={party}
        activePlayer={activePlayer}
        gameMode={gameMode}
        question={question}
      />
      <div className="mt-4 space-y-2">
        <button
          type="button"
          onClick={ScoreUp}
          className="w-full rounded-2xl border border-red-500 bg-gradient-to-r from-red-600 to-red-500 py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-red-900/40 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Zaliczone
        </button>

        <button
          type="button"
          onClick={DrinkUp}
          className="w-full rounded-2xl border border-red-500/80 bg-zinc-950/80 py-3 text-base font-semibold tracking-wide text-red-200 shadow-md shadow-black/40 hover:bg-zinc-900 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Pije!
        </button>
        {gameMode === "party" && (
          <button
            type="button"
            onClick={SkipQuestion}
            className="w-full rounded-2xl border border-zinc-600 bg-transparent py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:bg-zinc-900/60 hover:border-zinc-500 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Wymień pytanie
          </button>
        )}
      </div>
    </section>
  );
};

export default DisplayQuestion;
