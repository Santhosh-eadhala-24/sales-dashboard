import NumberInput from "../atoms/NumberInput";
export default function ThresholdInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm text-stone-700">
      Sales threshold
      <NumberInput value={value} onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))} />
    </label>
  );
}
