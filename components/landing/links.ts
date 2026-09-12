export const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#for-women", label: "For Women" },
  { href: "/#resources", label: "Resources" },
  { href: "/#find-care", label: "Find Care" },
] as const;

export const footerNavLinks = [
  ...navLinks,
  { href: "/about", label: "About" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimer", label: "Medical Disclaimer" },
] as const;
