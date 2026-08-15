import { Link } from "react-router-dom";
import logo from "../../assets/logos/desiglo-logo.png";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Desiglo home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="h-10 w-auto object-contain sm:h-11"
      />

      <span className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
        Desiglo
      </span>
    </Link>
  );
}