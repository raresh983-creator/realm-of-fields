import { createFileRoute } from "@tanstack/react-router";
import { SectionLayout } from "../components/SectionLayout";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/bibliografie")({
  component: Bibliografie,
});

const references = [
  "[1] Simona Bibic, Curs 1 MS - Elemente de Teoria Câmpurilor (ETC1).",
  "[2] Simona Bibic, Curs 2 MS - Elemente de Teoria Câmpurilor (ETC2).",
  "[3] Octav Olteanu, Matematici Speciale, Editura Politehnica Press, București.",
  "[4] Mircea Craioveanu, Geometrie diferențială și teoria câmpurilor, Editura Didactică și Pedagogică.",
  "[5] Ion Gh. Săbăc, Matematici Speciale (vol.1).",
  "[6] Trandafir Bălan, Matematici Speciale. Teoria Câmpurilor",
  "[7] Vladimir Bălan, Matematici Speciale",
  "[8] P. Cocârlan, I.Gh. Săbăc, O. Stănășilă, A. Topală, Matematici speciale (vol.2)",
  "[9] Nicolae Boja, Capitole de matematici speciale",
  "[10] Constantin Șora, Bazele electrotehnicii",
  "[11] Edmond Nicolau, Câmpuri și unde electromagnetice",
  "[12] Hugo Rosman, Gh. Savin, Circuite electrice liniare (vol.1)",
  "[13] Gheorghe Gavrilă, Bazele electrotehnicii. Elemente de teoria câmpului electromagnetic",
  "[14] Remus Rădulet, Bazele electrotehnicii",
  "[15] A. Timotei, V. Hortopan, Lecții de bazele electrotehnicii"
];

function Bibliografie() {
  return (
    <SectionLayout>
      <section className="min-h-[calc(100dvh-4rem)] px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-4xl">
          <div className="font-mono text-pole-south/70 tracking-widest text-xs mb-6 uppercase flex items-center gap-4">
            <BookOpen size={14} />
            Referințe Bibliografice
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl italic mb-12">
            Bibliografie
          </h1>
          
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div 
                key={index} 
                className="bg-fluid border border-border rounded-sm p-6 hover:border-pole-south/30 transition-colors"
              >
                <p className="text-particle text-lg leading-relaxed font-light">
                  {ref}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-particle-dim text-sm">
          Aceste surse au fost utilizate pentru documentarea și dezvoltarea conținutului prezentat în acest proiect educațional despre teoria câmpurilor electromagnetice.
            </p>
          </div>
        </div>
      </section>
    </SectionLayout>
  );
}
