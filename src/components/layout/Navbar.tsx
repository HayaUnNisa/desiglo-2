import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import Container from "../common/Container";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[9999] border-b border-white/[0.07] bg-[#061820]/95 backdrop-blur-xl">
        <Container>
          <div className="flex h-[84px] items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-1 lg:flex"
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `
                      rounded-lg
                      border
                      px-3.5
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "border-[#168CFF]/40 bg-[#168CFF]/15 !text-[#39BDF8]"
                          : "border-transparent text-[#C9CED3] hover:border-[#168CFF]/20 hover:bg-[#168CFF]/10 hover:!text-[#39BDF8]"
                      }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button to="/start-a-project">
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() =>
                setMobileOpen((previous) => !previous)
              }
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-white
                transition-all
                duration-200
                hover:border-[#168CFF]/50
                hover:bg-[#168CFF]/10
                hover:!text-[#39BDF8]
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="border-t border-white/[0.07] bg-[#061820]/98 py-5 lg:hidden">
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1"
              >
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `
                        rounded-lg
                        border
                        px-3
                        py-3
                        text-sm
                        font-medium
                        transition-all
                        duration-200
                        ${
                          isActive
                            ? "border-[#168CFF]/40 bg-[#168CFF]/15 !text-[#39BDF8]"
                            : "border-transparent text-[#C9CED3] hover:border-[#168CFF]/20 hover:bg-[#168CFF]/10 hover:!text-[#39BDF8]"
                        }
                      `
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Button
                  to="/start-a-project"
                  className="mt-4 w-full"
                >
                  Start a Project
                </Button>
              </nav>
            </div>
          )}
        </Container>
      </header>

      {/* Spacer so page content does not hide behind fixed navbar */}
      <div className="h-[84px]" />
    </>
  );
}