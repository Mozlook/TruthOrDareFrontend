import { useState } from "react";

type Props = {
  party: string[];
  setParty: React.Dispatch<React.SetStateAction<string[]>>;
};

const PartyCreator: React.FC<Props> = ({ party, setParty }) => {
  const [player, setPlayer] = useState<string>("");

  function AddToParty() {
    if (!player.trim()) return;
    setParty((prev) => [...prev, player.trim()]);
    setPlayer("");
  }

  return (
    <div className="space-y-3">
      {party.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {party.map((member) => (
            <span
              key={member}
              className="rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-100"
            >
              {member}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={player}
          onChange={(e) => {
            setPlayer(e.target.value);
          }}
          placeholder="Dodaj gracza"
          className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder:text-zinc-500"
        />
        <button
          type="button"
          onClick={AddToParty}
          className="rounded-2xl border border-red-500 bg-red-600 px-4 text-sm font-medium text-white shadow-md shadow-red-900/40 active:scale-[0.97] transition-transform"
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default PartyCreator;
