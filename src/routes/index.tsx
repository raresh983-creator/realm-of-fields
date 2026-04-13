import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLayout } from "../components/SectionLayout";
import heroImg from "../assets/hero-field.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teoria Câmpurilor Electromagnetice — ETC" },
      {
        name: "description",
        content:
          "Explorați universul câmpurilor electromagnetice: gradient, divergență, rotor, flux și circulație.",
      },
      {
        property: "og:title",
        content: "Teoria Câmpurilor Electromagnetice — ETC",
      },
      {
        property: "og:description",
        content:
          "De la matematică la electromagnetism — un deep dive în elementele de teoria câmpurilor.",
      },
    ],
  }),
  component: Index,
});

const sections = [
  {
    num: "01",
    title: "Vizualizarea Câmpurilor",
    desc: "Suprafețe echipotențiale, linii de câmp și tuburi de vectori.",
    to: "/vizualizare",
  },
  {
    num: "02",
    title: "Gradientul & Câmpul Irotațional",
    desc: "Direcția variației maxime, perpendicularitatea și câmpurile armonice.",
    to: "/gradient",
  },
  {
    num: "03",
    title: "Divergența & Câmpul Magnetic",
    desc: "Izvoare, puțuri și câmpuri solenoidale.",
    to: "/divergenta",
  },
  {
    num: "04",
    title: "Circulația & Fluxul",
    desc: "Teoremele lui Stokes și Gauss-Ostrogradski.",
    to: "/circulatia",
  },
  {
    num: "05",
    title: "Aplicații Inginerești",
    desc: "Câmpul magnetic al unui conductor, exemple ETC și aplicații reale.",
    to: "/aplicatii",
  },
];

function Index() {
  return (
    <SectionLayout>
      {/* Hero */}
      <section className="min-h-[95dvh] flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 relative">
        {/* Hero image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Câmpuri electromagnetice"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
        </div>

        <div className="relative z-10">
          <div className="font-mono text-pole-south/70 tracking-widest text-xs mb-8 uppercase flex items-center gap-4">
            <span className="block size-1.5 rounded-full bg-pole-south shadow-[0_0_12px_oklch(0.75_0.14_200)]" />
            Elemente de Teoria Câmpurilor
          </div>
          <h1 className="font-display text-6xl md:text-[8rem] leading-[0.85] tracking-tighter text-balance max-w-[15ch]">
            Topologia{" "}
            <br />
            <span className="italic text-iron">Invizibilului</span>
          </h1>
          <p className="mt-12 max-w-[55ch] text-particle-dim text-lg md:text-xl font-light leading-relaxed">
            O imersiune în structura matematică a universului. Observați cum
            forțele elementare sculptează spațiul gol prin tensiune, flux și
            circulație, aliniind materia ca pilitura de fier într-un curent
            magnetic.
          </p>
        </div>
      </section>

      {/* Section cards */}
      <section className="px-8 md:px-16 lg:px-24 py-32">
        <div className="font-mono text-iron text-xs tracking-[0.2em] uppercase mb-16">
          Capitole
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <Link
              key={s.num}
              to={s.to}
              className="group bg-fluid border border-border rounded-sm p-8 hover:border-pole-south/30 transition-all duration-500 flex flex-col gap-4"
            >
              <span className="font-mono text-pole-south text-sm">
                {s.num}
              </span>
              <h3 className="font-display text-3xl italic group-hover:text-gradient-cyan transition-colors">
                {s.title}
              </h3>
              <p className="text-particle-dim text-sm leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-pole-south text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explorează <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Intro: Ce este un câmp? */}
      <section className="px-8 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="font-display text-5xl md:text-6xl italic mb-8">
            Ce este un „câmp"?
          </h2>
          <div className="space-y-6 text-particle-dim text-lg font-light leading-relaxed">
            <p>
              Un câmp este caracterizat de o{" "}
              <span className="text-particle">bază materială</span> (domeniul
              geometric în care acționează) și de o{" "}
              <span className="text-particle">funcție analitică</span> (care
              descrie acțiunea propriu-zisă).
            </p>
            <p>
              În inginerie, lucrăm adesea cu câmpuri staționare — mărimea
              câmpului nu variază în timp, ci depinde exclusiv de poziția
              punctului în spațiu{" "}
              <span className="font-mono text-sm text-pole-south">
                M(x, y, z)
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </SectionLayout>
  );
}
