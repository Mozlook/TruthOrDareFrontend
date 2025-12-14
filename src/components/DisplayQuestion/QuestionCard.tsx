import type { Question, GameMode } from "../../models/models";
type Props = {
  party: string[];
  gameMode: GameMode;
  question: Question;
  DrawQuestion: () => void;
};
const QuestionCard: React.FC<Props> = ({ party, gameMode, question }) => {
  return <div>{question.text}</div>;
};
export default QuestionCard;
