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
  }, [questionPackage.normal, questionPackage.hard, questionPackage.hardcore]);

  function DrawQuestion() {
    if (!questions.length) {
      console.log("empty question array");
      return;
    }
    const index = Math.floor(Math.random() * questions.length);
    setQuestion(questions[index]);
  }

  useEffect(() => {
    DrawQuestion();
  }, [questions.length]);

  return (
    <div className="flex flex-col border-1">
      <QuestionCard
        party={party}
        gameMode={gameMode}
        question={question}
        DrawQuestion={DrawQuestion}
      />
    </div>
  );
};
export default DisplayQuestion;
