import type { QuestionsPackage } from "../../models/models";

type Props = {
  questionsPackage: QuestionsPackage;
  setQuestionPackage: React.Dispatch<React.SetStateAction<QuestionsPackage>>;
};

const QuestionsPackagePicker: React.FC<Props> = ({
  questionsPackage,
  setQuestionPackage,
}) => {
  return (
    <div className="flex flex-col gap-2 border-1">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={questionsPackage.normal}
          onChange={(e) =>
            setQuestionPackage((prev) => ({
              ...prev,
              normal: e.target.checked,
            }))
          }
        />
        <span>Zwykłe</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={questionsPackage.hard}
          onChange={(e) =>
            setQuestionPackage((prev) => ({
              ...prev,
              hard: e.target.checked,
            }))
          }
        />
        <span>Mocne</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={questionsPackage.hardcore}
          onChange={(e) =>
            setQuestionPackage((prev) => ({
              ...prev,
              hardcore: e.target.checked,
            }))
          }
        />
        <span>Szczerze? Mega Mocne</span>
      </label>
    </div>
  );
};

export default QuestionsPackagePicker;
