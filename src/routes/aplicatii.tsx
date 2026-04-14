import { createFileRoute, Link } from "@tanstack/react-router";
import {
  SectionLayout,
  EquationBox,
  PhysicsNote,
} from "../components/SectionLayout";
import conductorImg from "../assets/conductor-field.jpg";
import equationBField from "../assets/equation-b-field.png";
import campulRadialFull from "../assets/campul-radial-full.png";
import campulCircularFull from "../assets/campul-circular-full.png";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/aplicatii")({
  component: AplicatiiPage,
});

function AplicatiiPage() {
  return (
    <SectionLayout>
      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-24 py-32 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <div className="absolute top-12 right-12 text-[12rem] md:text-[20rem] font-mono font-thin leading-none text-particle/[0.02] select-none pointer-events-none">
          B
        </div>

        <div className="md:col-span-5 flex flex-col justify-center relative">
          <div className="absolute -left-8 md:-left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-iron/20 to-transparent" />
          <div className="font-mono text-pole-south/70 tracking-widest text-xs mb-4 uppercase">
            Secțiunea 05
          </div>
          <h1 className="font-display text-5xl md:text-6xl italic mb-6">
            Câmpul Magnetic în Jurul unui Conductor
          </h1>

          <p className="text-particle-dim text-lg font-light leading-relaxed mb-8">
            Un conductor rectiliniu parcurs de curent electric generează un
            câmp magnetic cu linii de câmp circulare, orientate conform{" "}
            <span className="text-particle">regulii mâinii drepte</span>.
          </p>

          <div className="bg-fluid border border-border rounded-sm p-8 md:p-10 relative">
            <div className="absolute -top-3 left-8 bg-void px-3 font-mono text-xs font-medium text-pole-south tracking-widest uppercase flex items-center gap-2">
              <span className="block size-1.5 rounded-full bg-pole-south" />
              Câmpul Magnetic
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 flex justify-center py-6 border-y border-border w-full">
                <img src={equationBField} alt="B = μ₀I / 2πr · eθ" className="h-16 object-contain" />
              </div>
              <div className="w-px h-24 bg-border hidden md:block" />
              <div className="w-full md:w-48 shrink-0 text-sm text-particle-dim">
                Unde μ₀ este permeabilitatea vidului, I curentul, r distanța, iar 𝑒⃗ este vectorul unitar tangent la liniile circulare ale câmpului magnetic.
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-particle font-body font-medium text-base mb-2">
                5.1 Fenomen fizic
              </h3>
              <p className="text-particle-dim leading-relaxed">
                Liniile de câmp magnetic formează{" "}
                <span className="text-particle">cercuri concentrice</span> în
                jurul conductorului. Sensul lor este determinat de regula
                mâinii drepte: dacă degetul mare arată în direcția curentului,
                degetele înfășurate indică sensul câmpului.
              </p>
            </div>

            <div>
              <h3 className="text-particle font-body font-medium text-base mb-2">
                5.2 Legătura cu ETC
              </h3>
              <p className="text-particle-dim leading-relaxed">
                Liniile de câmp circulare sunt soluții matematice ale ecuațiilor
                câmpurilor vectoriale. Proprietățile fundamentale:
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className="text-pole-south">div B = 0</span>
                  <span className="text-particle-dim">— fără surse</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className="text-pole-south">rot B ≠ 0</span>
                  <span className="text-particle-dim">— câmp rotațional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="aspect-[4/5] bg-fluid relative overflow-hidden rounded-sm group">
            <img
              src={conductorImg}
              alt="Câmp magnetic circular în jurul unui conductor"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full h-full object-cover mix-blend-luminosity opacity-50 transition-all duration-1000 group-hover:opacity-80 scale-105 group-hover:scale-100 blur-[3px] group-hover:blur-none"
            />
            <div className="absolute inset-0 border border-border pointer-events-none" />
            <div className="absolute bottom-6 left-6 font-mono text-xs text-particle/40 tracking-widest uppercase">
              Fig. 5 — Linii de câmp circulare
            </div>
          </div>
        </div>
      </section>

      {/* Exemples ETC */}
      <section className="px-8 md:px-16 lg:px-24 py-16 border-t border-border">
        <h2 className="font-display text-4xl md:text-5xl italic mb-16 text-center">
          Exemple ETC
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Exemplu 1: Câmpul radial */}
          <div className="flex flex-col gap-6">
            <img src={campulRadialFull} alt="Câmpul radial — divergența și rotorul" className="w-full rounded-sm border border-border" />

            <PhysicsNote>
              Câmpul radial are divergență nenulă (izvor), dar rotor nul —
              indică un câmp cu sursă fără rotație. Analog cu câmpul electric
              al unei sarcini punctiforme.
            </PhysicsNote>
          </div>

          {/* Exemplu 2: Câmpul circular */}
          <div className="flex flex-col gap-6">
            <img src={campulCircularFull} alt="Câmpul circular — ecuațiile liniilor de câmp" className="w-full rounded-sm border border-border" />

            <PhysicsNote>
              Liniile de câmp sunt{" "}
              <span className="text-particle font-medium">
                cercuri concentrice
              </span>{" "}
              — exact ca liniile câmpului magnetic din jurul unui fir
              parcurs de curent. Dovadă că ETC descrie fenomene reale.
            </PhysicsNote>
          </div>
        </div>
      </section>

      {/* Aplicații reale */}
      <section className="px-8 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-iron text-xs tracking-[0.2em] uppercase mb-8">
            Aplicații Reale
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Motoare Electrice", desc: "Câmpul magnetic rotativ convertește energia electrică în mișcare mecanică." },
              { icon: "🔌", title: "Generatoare", desc: "Variația fluxului magnetic prin spire produce forță electromotoare." },
              { icon: "🔗", title: "Cabluri Electrice", desc: "Câmpul magnetic al conductoarelor determină impedanța și pierderile." },
            ].map((app) => (
              <div
                key={app.title}
                className="bg-fluid border border-border rounded-sm p-8 flex flex-col items-center gap-4 text-center"
              >
                <span className="text-3xl">{app.icon}</span>
                <h3 className="text-particle font-medium">{app.title}</h3>
                <p className="text-particle-dim text-sm leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concluzie */}
      <section className="px-8 md:px-16 lg:px-24 py-40 border-t border-border flex flex-col items-center text-center">
        <h2 className="font-display text-5xl md:text-7xl italic mb-12 max-w-4xl leading-[0.9]">
          Concluzie
        </h2>
        <p className="text-particle-dim text-xl font-light leading-relaxed max-w-[60ch] mb-12">
          ETC oferă un limbaj matematic riguros pentru descrierea fenomenelor
          din ingineria electrică. Concepte precum gradientul, divergența,
          rotorul și fluxul descriu direct comportamentul câmpurilor reale.
        </p>
        <div className="font-mono text-pole-south text-sm bg-pole-south/5 px-8 py-4 rounded-full border border-pole-south/20 mb-16">
          ETC = legătura esențială dintre matematică și aplicațiile inginerești
        </div>

        <div className="flex flex-wrap gap-4 justify-center font-mono text-xs tracking-widest uppercase">
          {["gradient", "divergență", "rotor", "flux", "circulație"].map(
            (concept) => (
              <span
                key={concept}
                className="bg-fluid border border-border rounded-full px-5 py-2 text-particle-dim"
              >
                {concept}
              </span>
            )
          )}
        </div>

        <div className="mt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-pole-south font-mono text-sm hover:underline"
          >
            <ArrowRight size={14} className="rotate-180" />
            Înapoi la Acasă
          </Link>
        </div>
      </section>
    </SectionLayout>
  );
}
