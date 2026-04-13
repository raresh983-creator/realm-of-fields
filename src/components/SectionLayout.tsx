import type { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
}

export function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <div className="min-h-dvh bg-void text-particle relative">
      {/* Background blurs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-pole-north/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-pole-south/5 blur-[120px]" />
      </div>
      <div className="relative z-10 pt-16">{children}</div>
    </div>
  );
}

export function EquationBox({
  label,
  equation,
  note,
}: {
  label: string;
  equation: string;
  note?: string;
}) {
  return (
    <div className="bg-fluid border border-border rounded-sm p-8 md:p-10 relative">
      <div className="absolute -top-3 left-8 bg-void px-3 font-mono text-xs font-medium text-pole-south tracking-widest uppercase flex items-center gap-2">
        <span className="block size-1.5 rounded-full bg-pole-south" />
        {label}
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-center font-mono text-lg md:text-xl text-particle py-6 border-y border-border w-full">
          {equation}
        </div>
        {note && (
          <>
            <div className="w-px h-24 bg-border hidden md:block" />
            <div className="w-full md:w-48 shrink-0 text-sm text-particle-dim">
              {note}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function PhysicsNote({ children }: { children: ReactNode }) {
  return (
    <aside className="bg-pole-north/5 border border-pole-north/20 p-5 rounded-sm text-sm">
      <h4 className="font-mono text-xs text-pole-south font-medium tracking-widest uppercase mb-2">
        Aplicație Inginerească
      </h4>
      <p className="text-particle-dim leading-relaxed">{children}</p>
    </aside>
  );
}
