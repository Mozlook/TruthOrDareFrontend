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

    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
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
        DrawQuestion={DrawQuestion}
      />
    </section>
  );
};

export default DisplayQuestion;
