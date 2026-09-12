"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "./Button";
import { Logo } from "./Logo";
import { navLinks } from "./links";
import { Wrap } from "./Wrap";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-cream/86 backdrop-blur-[10px]">
      <Wrap className="flex h-[76px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-9 min-[981px]:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-ink-soft transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ButtonLink href="/#try" size="sm" className="hidden min-[481px]:inline-flex">
            Try EarlyHer
          </ButtonLink>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-line min-[981px]:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1">
              <span
                className={`h-px w-full bg-ink transition-transform ${open ? "translate-y-[2.5px] rotate-45" : ""}`}
              />
              <span className={`h-px w-full bg-ink ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-full bg-ink transition-transform ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </Wrap>
      {open ? (
        <div className="border-t border-line bg-cream min-[981px]:hidden">
          <Wrap className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2.5 text-[14.5px] font-medium text-ink-soft hover:bg-white hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href="/#try"
              size="sm"
              className="mt-2 self-start min-[481px]:hidden"
              onClick={() => setOpen(false)}
            >
              Try EarlyHer
            </ButtonLink>
          </Wrap>
        </div>
      ) : null}
    </nav>
  );
}
