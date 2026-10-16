import Button from "../atoms/Button";
import { YEARS, type Year } from "@/types/sales";
export default function YearTabs({ value, onChange }: { value: Year; onChange: (y: Year) => void }) {
  return (
    <div className="flex gap-2" role="group" aria-label="Year">
      {YEARS.map((y) => (
        <Button key={y} active={y === value} onClick={() => onChange(y)}>{y}</Button>
      ))}
    </div>
  );
}
