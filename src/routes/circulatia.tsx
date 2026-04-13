import { createFileRoute } from "@tanstack/react-router";
import {
  SectionLayout,
  EquationBox,
  PhysicsNote,
} from "../components/SectionLayout";
import rotorImg from "../assets/rotor-field.jpg";
import gaussFormula from "../assets/gauss-formula.png";

export const Route = createFileRoute("/circulatia")({
  head: () => ({
    meta: [
      { title: "Circulația & Fluxul — ETC" },
      {
        name: "description",
        content:
          "Teorema lui Stokes, teorema Gauss-Ostrogradski și interpretarea lor fizică.",
      },
      { property: "og:title", content: "Circulația & Fluxul — ETC" },
      {
        property: "og:description",
        content:
          "Ecuațiile lui Maxwell se bazează pe circulație și flux — descoperă cum le măsurăm.",
      },
    ],
  }),
  component: CirculatiaPage,
});

function CirculatiaPage() {
  return (
    <SectionLayout>
      {/* Cinematic rotor hero */}
      <section className="px-8 md:px-16 lg:px-24 py-40 flex flex-col items-center text-center">
        <div className="font-mono text-iron mb-8 text-sm tracking-[0.2em] uppercase">
          Secțiunea 04
        </div>
        <h1 className="font-display text-5xl md:text-8xl italic mb-12 text-balance max-w-5xl leading-[0.9]">
          Circulația & Fluxul
        </h1>
        <p className="text-particle-dim text-xl font-light leading-relaxed max-w-[60ch] mb-20">
          Ecuațiile lui Maxwell se bazează pe trei noțiuni fundamentale de
          calcul integral pe care le folosim pentru a „măsura" câmpul la scară
          macro.
        </p>

        <div className="w-full max-w-6xl aspect-[21/9] bg-fluid relative overflow-hidden rounded-sm group">
          <img
            src={rotorImg}
            alt="Vizualizare rotor — vârtej"
            loading="lazy"
            width={1920}
            height={800}
            className="w-full h-full object-cover mix-blend-luminosity opacity-30 transition-transform duration-1000 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-border pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="font-mono text-4xl md:text-7xl font-thin text-particle/30 tracking-widest">
              ∮ F · dl
            </div>
          </div>
        </div>
      </section>

      {/* Two columns: Circulația & Fluxul */}
      <section className="px-8 md:px-16 lg:px-24 py-32 grid md:grid-cols-3 gap-12">
        {/* Circulația */}
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-4xl italic">
            Circulația (Stokes)
          </h2>

          <div className="bg-fluid border border-border rounded-sm p-8 md:p-10 relative">
            <div className="absolute -top-3 left-8 bg-void px-3 font-mono text-xs font-medium text-pole-south tracking-widest uppercase flex items-center gap-2">
              <span className="block size-1.5 rounded-full bg-pole-south" />
              Formula lui Stokes
            </div>
            <div className="flex justify-center py-6 border-y border-border">
              <img src={stokesFormula} alt="∮ F · dl = ∬ (rot F) · dS" className="h-12 object-contain" />
            </div>
          </div>

          <p className="text-particle-dim leading-relaxed">
            Circulația reprezintă integrala de linie a vectorului de-a lungul
            unei curbe închise.
          </p>

          <PhysicsNote>
            Dacă vectorul studiat reprezintă o forță (F), atunci circulația
            pe o traiectorie închisă reprezintă exact{" "}
            <span className="text-particle font-medium">
              lucrul mecanic
            </span>{" "}
            efectuat de acele forțe. Prin formula lui Stokes, circulația pe
            contur este egală cu fluxul rotorului prin suprafața delimitată.
          </PhysicsNote>
        </div>

        {/* Fluxul */}
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-4xl italic">
            Fluxul (Gauss-Ostrogradski)
          </h2>

          <EquationBox
            label="Formula Gauss-Ostrogradski"
            equation="∯ F · dS = ∭ (div F) dV"
          />

          <p className="text-particle-dim leading-relaxed">
            Fluxul reprezintă o integrală de suprafață care ne spune
            cantitatea exactă de „câmp" care străbate acea suprafață.
          </p>

          <PhysicsNote>
            Dacă ne imaginăm câmpul ca pe curgerea unui fluid, fluxul ne
            spune cantitatea exactă de fluid care străbate suprafața în
            unitatea de timp. Formula Gauss-Ostrogradski permite calculul
            fluxului adunând toate divergențele (izvoarele) din interiorul
            volumului închis.
          </PhysicsNote>
        </div>

        {/* Integrala de suprafață a scalarului */}
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-4xl italic">
            Fluxul Scalar (Gradient)
          </h2>

          <EquationBox
            label="Formula integrală"
            equation="∬ n⃗·f dS = ∭ ∇f dV"
          />

          <p className="text-particle-dim leading-relaxed">
            Integrala dublă orientată a unui câmp scalar pe o suprafață
            închisă este egală cu integrala triplă a gradientului în
            volumul delimitat.
          </p>

          <PhysicsNote>
            Această relație leagă valorile unui câmp scalar pe frontieră
            de variația sa spațială în interior, oferind o metodă de
            calcul analogă teoremei Gauss-Ostrogradski, dar aplicată
            funcțiilor scalare.
          </PhysicsNote>
        </div>
      </section>
    </SectionLayout>
  );
}
