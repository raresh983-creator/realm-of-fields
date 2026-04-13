import { createFileRoute } from "@tanstack/react-router";
import {
  SectionLayout,
  EquationBox,
  PhysicsNote,
} from "../components/SectionLayout";
import divImg from "../assets/divergence-field.jpg";

export const Route = createFileRoute("/divergenta")({
  head: () => ({
    meta: [
      { title: "Divergența & Câmpul Magnetic — ETC" },
      {
        name: "description",
        content:
          "Izvoare, puțuri și câmpul solenoidal. Divergența și proprietățile câmpului magnetic.",
      },
      { property: "og:title", content: "Divergența & Câmpul Magnetic — ETC" },
      {
        property: "og:description",
        content:
          "Ce înseamnă divergența în lumea reală: surse, absorbții și incompresibilitatea fluxului magnetic.",
      },
    ],
  }),
  component: DivergentaPage,
});

function DivergentaPage() {
  return (
    <SectionLayout>
      <section className="px-8 md:px-16 lg:px-24 py-32 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        {/* Background symbol */}
        <div className="absolute top-12 left-12 text-[12rem] md:text-[20rem] font-mono font-thin leading-none text-particle/[0.02] select-none pointer-events-none">
          ∇·F
        </div>

        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="font-mono text-pole-south/70 tracking-widest text-xs mb-4 uppercase">
            Secțiunea 03
          </div>
          <h1 className="font-display text-5xl md:text-6xl italic mb-6">
            Divergența, Izvoarele și Câmpul Magnetic
          </h1>

          <p className="text-particle-dim text-lg font-light leading-relaxed mb-8">
            Un câmp magnetic este un câmp solenoidal, definit matematic prin{" "}
            <span className="font-mono text-pole-south">div H = 0</span>.
          </p>

          <EquationBox
            label="Divergența"
            equation="div V = ∇ · V = P'x+Q'y+R'z"
          />

          <div className="mt-8 space-y-6 text-particle-dim leading-relaxed">
            <div>
              <h3 className="text-particle font-body font-medium text-base mb-2">
                Izvoare și Puțuri
              </h3>
              <p>
                Dacă divergența este strict pozitivă (
                <span className="font-mono text-sm text-pole-south">
                  div v {">"} 0
                </span>
                ), avem un fenomen de emisie — un izvor.
                <br />
                Dacă este negativă (
                <span className="font-mono text-sm text-pole-south">
                  div v {"<"} 0
                </span>
                ), avem un fenomen de absorbție — un puț.
              </p>
            </div>

            <div>
              <h3 className="text-particle font-body font-medium text-base mb-2">
                Câmpul Fără Surse
              </h3>
              <p>
                Deoarece câmpul magnetic are{" "}
                <span className="font-mono text-sm text-pole-south">
                  div H = 0
                </span>
                , el nu are nici izvoare, nici puțuri. Liniile de câmp formează
                un tub de curent prin care fluxul este complet incompresibil.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <PhysicsNote>
              Divergența nulă a câmpului magnetic reflectă faptul că nu
              există monopoli magnetici. Orice linie de câmp magnetic este o
              curbă închisă — spre deosebire de câmpul electric care poate
              începe pe sarcini pozitive și se termina pe sarcini negative.
            </PhysicsNote>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="aspect-[4/5] bg-fluid relative overflow-hidden rounded-sm group">
            <img
              src={divImg}
              alt="Divergență — izvor de câmp"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full h-full object-cover mix-blend-luminosity opacity-40 transition-all duration-1000 group-hover:opacity-80 scale-105 group-hover:scale-100 blur-[3px] group-hover:blur-none"
            />
            <div className="absolute inset-0 border border-border pointer-events-none" />
            <div className="absolute bottom-6 left-6 font-mono text-xs text-particle/40 tracking-widest uppercase">
              Fig. 3 — Sursă cu divergență pozitivă
            </div>
          </div>
        </div>
      </section>
    </SectionLayout>
  );
}
