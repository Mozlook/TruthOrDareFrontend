import { useState } from "react";
import CreateGame from "./components/CreateGame";
import type { QuestionsPackage } from "./models/models";

function App() {
    const [questionPackage, setQuestionPackage] = useState<QuestionsPackage>({
        normal: false,
        hard: false,
        hardcore: false,
    });
    return (
        <div className="flex justify-center min-h-screen ">
            <CreateGame
                questionsPackge={questionPackage}
                setQuestionsPackage={setQuestionPackage}
            />
        </div>
    );
}

export default App;
