export function Cell({ value, onClick }) {
  return (
    <button className="cell" onClick={onClick} disabled={!!value}>
      {value}
    </button>
  );
}
