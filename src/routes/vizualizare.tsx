import { createFileRoute } from "@tanstack/react-router";
import {
  SectionLayout,
  PhysicsNote,
} from "../components/SectionLayout";
import gradientImg from "../assets/gradient-field.jpg";

export const Route = createFileRoute("/vizualizare")({
  component: VizualizarePage,
});

function VizualizarePage() {
  return (
    <SectionLayout>
      <section className="px-8 md:px-16 lg:px-24 py-32 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        {/* Background symbol */}
        <div className="absolute top-12 right-12 text-[12rem] md:text-[20rem] font-mono font-thin leading-none text-particle/[0.02] select-none pointer-events-none">
          Φ
        </div>

        <div className="md:col-span-5 flex flex-col justify-center relative">
          <div className="absolute -left-8 md:-left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-iron/20 to-transparent" />
          <div className="font-mono text-pole-south/70 tracking-widest text-xs mb-4 uppercase">
            Secțiunea 01
          </div>
          <h1 className="font-display text-5xl md:text-6xl italic mb-6">
            Cum „vedem" un câmp invizibil?
          </h1>

          <div className="space-y-6 text-particle-dim text-lg font-light leading-relaxed">
            <p>
              Câmpurile electrice și magnetice sunt invizibile cu ochiul liber,
              dar matematica ne oferă instrumente pentru a le vizualiza.
            </p>

            <div>
              <h3 className="text-particle font-body font-medium text-base mb-2">
                Suprafețele Echipotențiale
              </h3>
              <p>
                Pentru un câmp scalar (precum potențialul electric sau
                distribuția de temperaturi), putem desena „suprafețe de nivel
                constant". Acestea reprezintă locul geometric al tuturor
                punctelor din spațiu unde valoarea câmpului este absolut
                aceeași.
              </p>
            </div>

            <div>
              <h3 className="text-particle font-body font-medium text-base mb-2">
                Liniile de Câmp
              </h3>
              <p>
                Pentru un câmp vectorial, vizualizarea se face prin curbe
                speciale. Proprietatea fundamentală: în orice punct al unei
                linii de câmp,{" "}
                <span className="text-particle">
                  vectorul de câmp este tangent la curbă
                </span>
                . Dacă trasăm mai multe linii printr-o curbă închisă, ele
                formează un{" "}
                <span className="font-mono text-sm text-pole-south">
                  tub de vectori
                </span>
                .
              </p>
            </div>
          </div>

          <div className="mt-8">
            <PhysicsNote>
              Potențialul electric V și câmpul electric E sunt legate prin
              relația{" "}
              <span className="font-mono text-pole-south">E = −∇V</span>.
              Suprafețele echipotențiale sunt întotdeauna perpendiculare pe
              liniile de câmp.
            </PhysicsNote>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="aspect-[4/5] bg-fluid relative overflow-hidden rounded-sm group">
            <img
              src={gradientImg}
              alt="Suprafețe echipotențiale"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full h-full object-cover mix-blend-luminosity opacity-40 transition-all duration-1000 group-hover:opacity-80 scale-105 group-hover:scale-100 blur-[3px] group-hover:blur-none"
            />
            <div className="absolute inset-0 border border-border pointer-events-none" />
            <div className="absolute bottom-6 left-6 font-mono text-xs text-particle/40 tracking-widest uppercase">
              Fig. 1 — Suprafețe echipotențiale concentrice
            </div>
          </div>
        </div>
      </section>
    </SectionLayout>
  );
}
