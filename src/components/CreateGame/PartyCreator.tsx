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

  function RemoveFromParty(idx: number) {
    const filteredParty = party.filter((_, i) => {
      return idx !== i;
    });
    setParty(filteredParty);
  }

  function MoveUp(idx: number) {
    if (idx <= 0) return;
    if (idx >= party.length) return;

    const newParty = [...party];
    const tmp = newParty[idx - 1];
    newParty[idx - 1] = newParty[idx];
    newParty[idx] = tmp;

    setParty(newParty);
  }

  function MoveDown(idx: number) {
    if (idx >= party.length - 1) return;

    const newParty = [...party];
    const tmp = newParty[idx + 1];
    newParty[idx + 1] = newParty[idx];
    newParty[idx] = tmp;

    setParty(newParty);
  }

  return (
    <div className="space-y-3">
      {party.length > 0 && (
        <div className="flex flex-col flex-wrap gap-2">
          {party.length > 0 && (
            <div className="flex flex-col flex-wrap gap-2">
              {party.map((member, idx) => (
                <div className="flex items-center justify-between" key={idx}>
                  <span className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-100">
                    {member}
                  </span>
                  <div>
                    {idx > 0 && (
                      <button
                        type="button"
                        onClick={() => MoveUp(idx)}
                        className="mr-3 rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-100 shadow-sm shadow-black/40 hover:bg-zinc-800 active:scale-95 transition"
                      >
                        ↑
                      </button>
                    )}
                    {idx < party.length - 1 && (
                      <button
                        type="button"
                        onClick={() => MoveDown(idx)}
                        className="mr-3 rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-100 shadow-sm shadow-black/40 hover:bg-zinc-800 active:scale-95 transition"
                      >
                        ↓
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => RemoveFromParty(idx)}
                      className="ml-3 self-center rounded-full border border-red-500/70 bg-red-600/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm shadow-red-900/40 hover:bg-red-500 active:scale-95 transition"
                    >
                      usuń
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
