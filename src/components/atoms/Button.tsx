import type { ButtonHTMLAttributes } from "react";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean };
export default function Button({ active, className = "", ...rest }: Props) {
  return (
    <button
      aria-pressed={active}
      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-teal-700 ${
        active ? "bg-teal-800 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
      } ${className}`}
      {...rest}
    />
  );
}
