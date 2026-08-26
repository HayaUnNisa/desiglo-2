import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "text";
type Props = { children: ReactNode; to?: string; href?: string; type?: "button"|"submit"; variant?: Variant; className?: string; disabled?: boolean; onClick?: () => void };
const variants: Record<Variant,string> = {
  primary: "bg-[#168CFF] text-white border border-[#168CFF] hover:bg-[#2998FF] hover:border-[#2998FF] shadow-[0_8px_30px_rgba(22,140,255,0.18)]",
  secondary: "bg-[#0A2029] text-white border border-white/15 hover:border-[#168CFF]/60 hover:bg-[#102F3A]",
  text: "border-transparent bg-transparent text-[#C9CED3] hover:text-white",
};
export default function Button({ children, to, href, type="button", variant="primary", className="", disabled=false, onClick }: Props) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes}>{children}</a>;
  return <button type={type} disabled={disabled} onClick={onClick} className={classes}>{children}</button>;
}
