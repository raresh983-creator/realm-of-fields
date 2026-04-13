import { createFileRoute } from "@tanstack/react-router";
import {
  SectionLayout,
  EquationBox,
  PhysicsNote,
} from "../components/SectionLayout";
import gradientImg from "../assets/gradient-field.jpg";

export const Route = createFileRoute("/gradient")({
  head: () => ({
    meta: [
      { title: "Gradientul & Câmpul Irotațional — ETC" },
      {
        name: "description",
        content:
          "Direcția variației maxime, perpendicularitatea gradientului și câmpurile armonice Laplaciene.",
      },
      {
        property: "og:title",
        content: "Gradientul & Câmpul Irotațional — ETC",
      },
      {
        property: "og:description",
        content:
          "Secretele gradientului: direcția de creștere maximă și ecuația lui Laplace.",
      },
    ],
  }),
  component: GradientPage,
});

function GradientPage() {
  return (
    <SectionLayout>
      {/* Hero area */}
      <section className="px-8 md:px-16 lg:px-24 py-32">
        <div className="font-mono text-pole-south/70 tracking-widest text-xs mb-4 uppercase">
          Secțiunea 02
        </div>
        <h1 className="font-display text-5xl md:text-7xl italic mb-6 max-w-4xl">
          Câmpul Irotațional și Secretele Gradientului
        </h1>
        <p className="text-particle-dim text-xl font-light leading-relaxed max-w-[60ch] mb-16">
          Un câmp electric staționar este irotațional (
          <span className="font-mono text-pole-south">rot E = 0</span>) și
          derivă dintr-un potențial. Dar cum se comportă el matematic?
        </p>

        <EquationBox
          label="Gradientul"
          equation="​"
          note="Unde ∇ (nabla) este operatorul diferențial vectorial Hamilton."
        />
      </section>

      {/* Content grid */}
      <section className="px-8 md:px-16 lg:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="aspect-[4/5] bg-fluid relative overflow-hidden rounded-sm group">
            <img
              src={gradientImg}
              alt="Câmp gradient"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full h-full object-cover mix-blend-luminosity opacity-40 transition-all duration-1000 group-hover:opacity-80 scale-105 group-hover:scale-100 blur-[3px] group-hover:blur-none"
            />
            <div className="absolute inset-0 border border-border pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 border border-pole-south/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="size-2 bg-pole-south rounded-full shadow-[0_0_20px_oklch(0.75_0.14_200)]" />
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 flex flex-col justify-center gap-8">
          <div>
            <h2 className="font-display text-3xl italic mb-4">
              Direcția variației maxime
            </h2>
            <p className="text-particle-dim leading-relaxed">
              Mărimea gradientului nu este doar un număr, ci reprezintă{" "}
              <span className="text-particle">
                valoarea maximă a derivatei direcționale
              </span>
              . Gradientul arată întotdeauna direcția în care câmpul crește
              cel mai rapid.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl italic mb-4">
              Perpendicularitatea
            </h2>
            <p className="text-particle-dim leading-relaxed">
              Lungimea gradientului reprezintă derivata funcției calculată
              exact pe direcția{" "}
              <span className="text-particle">
                normală la suprafața echipotențială
              </span>
              . Gradientul este mereu perpendicular pe suprafețele de nivel
              constant.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl italic mb-4">
              Câmpuri Armonice
            </h2>
            <p className="text-particle-dim leading-relaxed mb-4">
              Câmpurile simultan irotaționale și solenoidale se numesc{" "}
              <span className="text-particle">câmpuri laplaciene</span>.
              Potențialul lor scalar respectă ecuația celebră:
            </p>
            <div className="font-mono text-pole-south text-lg bg-pole-north/5 inline-flex px-5 py-2.5 rounded-full border border-pole-north/20">
              Δf = 0
            </div>
          </div>

          <PhysicsNote>
            În electrostatică, ecuația lui Laplace descrie potențialul
            electric în regiunile fără sarcini. Soluțiile sunt funcții
            armonice — esențiale pentru calculul condensatoarelor și al
            câmpurilor de fugă.
          </PhysicsNote>
        </div>
      </section>
    </SectionLayout>
  );
}
