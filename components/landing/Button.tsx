import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,border-color] duration-150 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-green-600 text-white shadow-sm hover:bg-green-700 hover:shadow-md hover:-translate-y-px",
  ghost:
    "bg-transparent text-ink border-line hover:border-ink hover:bg-white",
};

const sizes: Record<Size, string> = {
  md: "px-[26px] py-3.5 text-[15px]",
  sm: "px-[18px] py-2.5 text-[13.5px]",
};

function classes(
  variant: Variant,
  size: Size,
  onDark: boolean,
  className: string,
) {
  return [
    base,
    variants[variant],
    sizes[size],
    onDark && variant === "ghost"
      ? "text-white border-line-on-dark hover:border-white/40 hover:bg-white/6"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={classes(variant, size, onDark, className)}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  className?: string;
} & ComponentProps<"button">) {
  return (
    <button
      className={classes(variant, size, onDark, className)}
      {...props}
    >
      {children}
    </button>
  );
}
