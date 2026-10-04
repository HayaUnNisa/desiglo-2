import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Magnetic from "../fx/Magnetic";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "text";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
}: Props) {
  const classes = `dg-button dg-button--${variant} ${className}`;
  let el: ReactNode;
  if (to) el = <Link to={to} className={classes}>{children}</Link>;
  else if (href) el = <a href={href} className={classes}>{children}</a>;
  else
    el = (
      <button type={type} disabled={disabled} onClick={onClick} className={classes}>
        {children}
      </button>
    );
  // Primary buttons get a subtle magnetic pull on desktop
  return variant === "primary" && !disabled ? (
    <Magnetic strength={0.22} className={className.includes("w-full") ? "w-full [&>*]:w-full" : ""}>{el}</Magnetic>
  ) : el;
}
