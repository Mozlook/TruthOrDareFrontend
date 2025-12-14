import type { GameMode, Question, QuestionsPackage } from "../../models/models";
import * as Questions from "../../resources/questions";
import * as Tasks from "../../resources/tasks";

type Props = {
  gameMode: GameMode;
  party: string[];
  questionsPackage: QuestionsPackage;
};
const DisplayQuestion: React.FC<Props> = ({
  gameMode,
  party,
  questionsPackage,
}) => {
  var questions: Question[] = [];
  if (questionsPackage.normal) {
    questions = [
      ...questions,
      ...Questions.normalQuestions,
      ...Tasks.normalTasks,
    ];
  }
  if (questionsPackage.hard) {
    questions = [...questions, ...Questions.hardQuestions, ...Tasks.hardTasks];
  }
  if (questionsPackage.normal) {
    questions = [
      ...questions,
      ...Questions.hardcoreQuestions,
      ...Tasks.hardcoreTasks,
    ];
  }
  return <div>test</div>;
};
export default DisplayQuestion;
