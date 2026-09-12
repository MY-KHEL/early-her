import Link from "next/link";
import { footerNavLinks, legalLinks } from "./links";
import { Logo } from "./Logo";
import { Wrap } from "./Wrap";

export function Footer() {
  return (
    <footer className="bg-navy pt-[72px] text-white/85">
      <Wrap>
        <div className="grid grid-cols-1 gap-10 border-b border-line-on-dark pb-14 min-[641px]:grid-cols-2 min-[981px]:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-[260px] text-[13.5px] leading-[1.6] text-white/55">
              Helping women move from breast health concerns to informed next
              steps.
            </p>
          </div>
          <div>
            <h5 className="mb-[18px] text-xs font-bold tracking-[0.06em] text-white/45 uppercase">
              Navigation
            </h5>
            <ul className="flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/75 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-[18px] text-xs font-bold tracking-[0.06em] text-white/45 uppercase">
              Legal
            </h5>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/75 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-[18px] text-xs font-bold tracking-[0.06em] text-white/45 uppercase">
              Contact
            </h5>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/contact"
                  className="text-[13.5px] text-white/75 transition-colors duration-150 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5 py-[26px]">
          <p className="max-w-[640px] text-xs leading-[1.6] text-white/45">
            EarlyHer is an informational and care navigation platform and is not
            a substitute for professional medical advice, diagnosis or
            treatment.
          </p>
          <p className="text-xs leading-[1.6] text-white/45">
            © 2026 EarlyHer. All rights reserved.
          </p>
        </div>
      </Wrap>
    </footer>
  );
}
