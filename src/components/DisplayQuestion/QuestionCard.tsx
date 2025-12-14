import type { Question, GameMode } from "../../models/models";
type Props = {
  party: string[];
  gameMode: GameMode;
  question: Question;
  DrawQuestion: () => void;
};
const QuestionCard: React.FC<Props> = ({
  party,
  gameMode,
  question,
  DrawQuestion,
}) => {
  return (
    <div>
      {question.text}
      <button onClick={DrawQuestion} className="border-1">
        Next
      </button>
    </div>
  );
};
export default QuestionCard;
