import { useEffect, useMemo, useState } from "react";
import type { GameMode, Question, QuestionsPackage } from "../../models/models";
import * as Questions from "../../resources/questions";
import * as Tasks from "../../resources/tasks";
import QuestionCard from "./QuestionCard";

type Props = {
  gameMode: GameMode;
  party: string[];
  questionPackage: QuestionsPackage;
};

const DisplayQuestion: React.FC<Props> = ({
  gameMode,
  party,
  questionPackage,
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
      <button
        type="button"
        onClick={DrawQuestion}
        className="mt-2 w-full rounded-2xl border border-red-500 bg-gradient-to-r from-red-600 to-red-500 py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-red-900/40 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Następne pytanie
      </button>
      <button
        type="button"
        onClick={SkipQuestion}
        className="mt-2 w-full rounded-2xl border border-red-500 bg-gradient-to-r from-red-600 to-red-500 py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-red-900/40 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Pomiń pytanie
      </button>
    </section>
  );
};

export default DisplayQuestion;
