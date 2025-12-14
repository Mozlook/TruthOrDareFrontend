import { useState } from "react";

type Props = {
  party: string[];
  setParty: React.Dispatch<React.SetStateAction<string[]>>;
};
const PartyCreator: React.FC<Props> = ({ party, setParty }) => {
  const [player, setPlayer] = useState<string>("");

  function AddToParty() {
    setParty((prev) => [...prev, player]);
    setPlayer("");
  }
  return (
    <div className="flex flex-col">
      {party.map((player) => (
        <span>{player}</span>
      ))}
      <div className="flex">
        <input
          type="text"
          value={player}
          onChange={(e) => {
            setPlayer(e.target.value);
          }}
          className="border-1"
        />
        <button onClick={AddToParty} className="border-1">
          Dodaj
        </button>
      </div>
    </div>
  );
};
export default PartyCreator;
