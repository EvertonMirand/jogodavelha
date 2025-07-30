import { Button } from "./styled";

export function Cell({ value, onClick }) {
  return (
    <Button onClick={onClick} disabled={!!value}>
      {value}
    </Button>
  );
}
