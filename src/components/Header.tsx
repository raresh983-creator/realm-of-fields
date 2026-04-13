import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Acasă" },
  { to: "/vizualizare", label: "Vizualizare" },
  { to: "/gradient", label: "Gradient" },
  { to: "/divergenta", label: "Divergența" },
  { to: "/circulatia", label: "Circulația" },
  { to: "/aplicatii", label: "Aplicații" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <span className="block size-2 rounded-full bg-pole-south shadow-[0_0_10px_var(--color-pole-south)]" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-iron">
            ETC — Teoria Câmpurilor
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-pole-south"
                    : "text-particle-dim hover:text-particle"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-particle-dim hover:text-particle transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-void/95 backdrop-blur-md border-b border-border px-6 py-6 flex flex-col gap-4 font-mono text-sm tracking-widest uppercase">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`transition-colors ${
                location.pathname === item.to
                  ? "text-pole-south"
                  : "text-particle-dim"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
