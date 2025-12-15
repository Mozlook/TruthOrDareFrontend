import type { QuestionsPackage } from "../../models/models";

type Props = {
  questionsPackage: QuestionsPackage;
  setQuestionPackage: React.Dispatch<React.SetStateAction<QuestionsPackage>>;
  setNoQuestions: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuestionsPackagePicker: React.FC<Props> = ({
  questionsPackage,
  setQuestionPackage,
  setNoQuestions,
}) => {
  return (
    <div className="space-y-2">
      <label className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100">
        <span>Zwykłe</span>
        <input
          type="checkbox"
          checked={questionsPackage.normal}
          onChange={(e) => {
            setQuestionPackage((prev) => ({
              ...prev,
              normal: e.target.checked,
            }));
            setNoQuestions(false);
          }}
          className="h-5 w-5 accent-red-500"
        />
      </label>

      <label className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100">
        <span>Mocniejsze</span>
        <input
          type="checkbox"
          checked={questionsPackage.hard}
          onChange={(e) => {
            setQuestionPackage((prev) => ({
              ...prev,
              hard: e.target.checked,
            }));
            setNoQuestions(false);
          }}
          className="h-5 w-5 accent-red-500"
        />
      </label>

      <label className="flex items-center justify-between gap-3 rounded-2xl border border-red-600/70 bg-red-950/60 px-4 py-3 text-sm text-zinc-100 shadow-inner shadow-red-900/50">
        <span>Szczerze? Mega mocne</span>
        <input
          type="checkbox"
          checked={questionsPackage.hardcore}
          onChange={(e) => {
            setQuestionPackage((prev) => ({
              ...prev,
              hardcore: e.target.checked,
            }));
            setNoQuestions(false);
          }}
          className="h-5 w-5 accent-red-500"
        />
      </label>
    </div>
  );
};

export default QuestionsPackagePicker;
