type InfoBoxProps = {
  onClose: () => void;
};

const InfoBox: React.FC<InfoBoxProps> = ({ onClose }) => {
  return (
    <div className="w-[95%] max-w-md rounded-3xl bg-black/80 border border-red-700/60 shadow-[0_0_30px_rgba(239,68,68,0.35)] backdrop-blur-sm px-5 py-6 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400/80">
          Informacje
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-800 active:scale-95 transition"
        >
          ✕
        </button>
      </div>
      <p className="text-sm text-zinc-100 space-y-3">
        <span className="block">
          Wszystkie zasady i zadania są do własnej interpretacji — najważniejsza
          jest dobra zabawa, a nie trzymanie się sztywnych reguł.
        </span>

        <span className="block">
          Aby rozpocząć grę, wybierz pakiety zadań, ustaw tryb gry oraz — jeśli
          grasz w trybie imprezowym — dodaj ekipę.
        </span>

        <span className="block">
          <span className="font-semibold text-red-300">Tryb zwykły:</span>
          nie ma znaczenia, czy klikniesz „zaliczone”, czy „piję”. Oba przyciski
          pełnią funkcję przejścia dalej, a przycisk „zakończ” kończy grę.
        </span>

        <span className="block">
          <span className="font-semibold text-red-300">Tryb imprezowy:</span>
          losowana jest pierwsza osoba, a następnie kolejka przesuwa się po
          liście graczy i zapętla. W tym trybie wybierane przyciski mają
          znaczenie — po zakończeniu gry wyświetlana jest tabela wyników
          pokazująca liczbę wykonanych zadań oraz wypitych shotów.
        </span>

        <span className="block">
          Jeśli pytanie okaże się zbyt nudne lub nie pasuje do sytuacji, możecie
          je przelosować — osoba wykonująca pozostaje wtedy ta sama.
        </span>
      </p>
    </div>
  );
};

export default InfoBox;
