import type { InputHTMLAttributes } from "react";
export default function NumberInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="number"
      min={0}
      className="w-28 rounded-md border border-stone-300 px-3 py-1.5 text-sm focus-visible:outline-2 focus-visible:outline-teal-700"
      {...props}
    />
  );
}
