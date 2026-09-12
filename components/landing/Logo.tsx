import Image from "next/image";
import Link from "next/link";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="EarlyHer"
        width={34}
        height={34}
        className="size-[34px] rounded-full"
        priority
      />
      <span
        className={`text-[19px] font-extrabold tracking-[-0.02em] ${onDark ? "text-white" : "text-ink"}`}
      >
        EarlyHer
      </span>
    </Link>
  );
}
