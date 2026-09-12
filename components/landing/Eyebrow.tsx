export function Eyebrow({
  children,
  variant = "pink",
}: {
  children: string;
  variant?: "pink" | "green" | "on-dark";
}) {
  const styles = {
    pink: "bg-pink-tint text-pink-600 before:bg-pink-600",
    green: "bg-green-tint text-green-700 before:bg-green-600",
    "on-dark": "bg-white/8 text-[#ff8fb4] before:bg-[#ff8fb4]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full py-[7px] pr-3.5 pl-3 text-[12.5px] font-bold tracking-[0.08em] before:size-1.5 before:shrink-0 before:rounded-full before:content-[''] ${styles}`}
    >
      {children}
    </span>
  );
}
