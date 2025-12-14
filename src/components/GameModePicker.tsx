type Props = {
    gameMode: string;
    setGameMode: React.Dispatch<React.SetStateAction<string>>;
};
const GameModePicker: React.FC<Props> = ({ setGameMode }) => {
    function SetGameMode(gameMode: string) {
        setGameMode(gameMode);
    }
    return (
        <div className="border-1 flex gap-4">
            <button
                type="button"
                className="m-2 border-1"
                onClick={() => SetGameMode("normal")}
            >
                Zwykła
            </button>

            <button
                type="button"
                className="m-2 border-1"
                onClick={() => SetGameMode("party")}
            >
                Impreza
            </button>
        </div>
    );
};
export default GameModePicker;
